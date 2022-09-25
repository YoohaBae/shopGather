import cv2
from PIL import Image
from fastapi import FastAPI
import os
import sys

from .scanning_receipt import create_digital_scan
from .analyze_receipt import get_text_from_img

app = FastAPI()

server = f"{os.getcwd()}/server/data/"


@app.post("/analyze/raw")
def analyze_raw_image():
    file_name = "data/receipt.png"
    img = Image.open(os.path.join(server, file_name))
    img.thumbnail((800, 800), Image.ANTIALIAS)
    image = cv2.imread(os.path.join(server, file_name))
    cropped_image = create_digital_scan(image)
    result_text = get_text_from_img(cropped_image)
    print(result_text)
    return {"Hello": "World"}


@app.post("/analyze/scan")
def analyze_scanned_image():
    file_name = "data/result.png"
    image = cv2.imread(os.path.join(server, file_name), cv2.IMREAD_GRAYSCALE)
    result_text = get_text_from_img(image)
    print(result_text)
    return {"Hello": "World2"}
