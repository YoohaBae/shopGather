from PIL import Image
from fastapi import FastAPI, APIRouter
import os
import base64
from io import BytesIO
from fastapi import Body
import re
import json
from difflib import SequenceMatcher
from fastapi.middleware.cors import CORSMiddleware

from .ocr_api import ocr_space_buffer

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "*"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"home": "home"}


router = APIRouter(prefix="/api")

server = f"{os.getcwd()}/server/data/"


def similar(a, b):
    return SequenceMatcher(None, a, b).ratio()


def isfloat(num):
    try:
        float(num)
        return True
    except ValueError:
        return False


def format_products(products_line):
    products = []
    price = None
    id_num = 0
    for p in products_line:
        new_p = re.split(r"[~\t\r\tx]+", p)
        if not price:
            find = re.findall("\d+\.\d+", p)
            if find:
                price = float(min(find))
            else:
                price = None
        product_obj = {"id": id_num, "name": new_p[0], "price": price}
        products.append(product_obj)
        id_num += 1
        price = None
    return products


def split_text_walmart(text):
    lines = re.split(r"[~\n]+", text)
    walmart_product_start = 7
    for i in range(0, len(lines)):
        find = re.findall("\d+\.\d+", lines[i])
        if find:
            walmart_product_start = i
            break
        """
        if "ST" in lines[i].split(" ")[0]:
            walmart_product_start = i + 1
            break
        """

    products_line = []
    subtotal_line = None
    tax_line = None
    total_line = None

    def check_if_similar_exists(target, arr):
        for i in arr:
            if similar(target, i) > 0.8:
                return True
        return False

    for i in range(walmart_product_start, len(lines)):
        if check_if_similar_exists("SUBTOTAL", re.split(r"[~\n\t\r\t\sx]+", lines[i])):
            subtotal_line = lines[i]
        elif check_if_similar_exists("TAX", re.split(r"[~\n\t\r\t\sx]+", lines[i])):
            tax_line = lines[i]
        elif check_if_similar_exists("TOTAL", re.split(r"[~\n\t\r\t\sx]+", lines[i])):
            total_line = lines[i]
            break
        else:
            products_line.append(lines[i])

    subtotal = None
    total = None
    tax = None
    if subtotal_line:
        try:
            subtotal = float(re.findall("\d+\.\d+", subtotal_line)[0])
        except:
            subtotal = float(re.findall("\d+", subtotal_line)[0])
    if tax_line:
        try:
            tax = float(re.findall("\d+\.\d+", tax_line)[0])
        except:
            tax = float(re.findall("\d+", tax_line)[0])
    if total_line:
        try:
            total = float(re.findall("\d+\.\d+", total_line)[0])
        except:
            total = float(re.findall("\d+", total_line)[0])
    formatted_products = format_products(products_line)
    result = {"subtotal": subtotal, "tax": tax, "total": total, "products": formatted_products}
    return result


@router.get("/")
def hi():
    return {"hi": "hello"}


@router.post("/analyze/scan")
def analyze_scanned_image(buffer=Body(...)):
    # file_name = "walmart3.jpeg"
    # img = Image.open(os.path.join(server, file_name))
    # buffer = BytesIO()
    # img.save(buffer, format="JPEG")
    # buffered = base64.b64encode(buffer.getvalue())
    # buffered = b'data:image/jpg;base64,' + buffered
    text = ocr_space_buffer(buffer["buffer"])
    json_type = json.loads(text)
    parsed_text = json_type["ParsedResults"][0]["ParsedText"]
    response = split_text_walmart(parsed_text)
    return response


app.include_router(router)
