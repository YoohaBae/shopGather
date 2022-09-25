import cv2
from PIL import Image
from fastapi import FastAPI
import os
import base64
from io import BytesIO
import re
import json

from .scanning_receipt import create_digital_scan
from .ocr_api import ocr_space_buffer

app = FastAPI()

server = f"{os.getcwd()}/server/data/"


def split_text_walmart(text):
    walmart_product_start = 7
    array = re.split(r"[~\n]+", text)
    print(array[walmart_product_start])


@app.post("/analyze/raw")
def analyze_raw_image():
    file_name = "walmart.jpeg"
    img = Image.open(os.path.join(server, file_name))
    img.thumbnail((800, 800), Image.ANTIALIAS)
    image = cv2.imread(os.path.join(server, file_name))
    cropped_image = create_digital_scan(image)
    buffer = BytesIO()
    cropped_image.save(buffer, format="JPEG")
    buffered = base64.b64encode(buffer.getvalue())
    buffered = b'data:image/jpg;base64,' + buffered
    text = ocr_space_buffer(buffered)
    json_type = json.loads(text)
    parsed_text = json_type["ParsedResults"][0]["ParsedText"]
    split_text_walmart(parsed_text)
    return {"Hello": "World"}


@app.post("/analyze/scan")
def analyze_scanned_image():
    file_name = "walmart.jpeg"
    img = Image.open(os.path.join(server, file_name))
    buffer = BytesIO()
    img.save(buffer, format="JPEG")
    buffered = base64.b64encode(buffer.getvalue())
    buffered = b'data:image/jpg;base64,' + buffered
    text = ocr_space_buffer(buffered)
    json_type = json.loads(text)
    parsed_text = json_type["ParsedResults"][0]["ParsedText"]
    split_text_walmart(parsed_text)
    return {"Hello": "World2"}
