from flask_restful import Api, Resource, reqparse
from flask import Flask, send_from_directory,current_app,jsonify,request
import requests as req
import numpy as np
import json
from PIL import Image  
import pandas as pd
from io import BytesIO
import base64
import os
from dotenv import load_dotenv
# from google import genai
# import google.generativeai as genai

df = pd.read_json('api/data/reviews.json')
with open('api/data/data_new.json', 'r', encoding='utf-8')  as file:
    reviews_text = file.read()


# Function to encode the image
def encode_image(image_path):
  with open(image_path, "rb") as image_file:
    return base64.b64encode(image_file.read()).decode('utf-8')

from random import randrange

def upload_file(file, url="http://localhost:8000/classify"):
    with BytesIO() as buf:
      file.save(buf, 'jpeg')
      image_bytes = buf.getvalue()

      files = {"image": image_bytes}
      response = req.post(url, files=files)

    return response.json()

def upload_reviews(df, column_name, url="http://localhost:8000/classify"):
    # Extract the list of reviews from the specified column
    reviews = df[column_name].tolist()

    # Prepare the payload for the POST request
    payload = {"reviews": reviews}

    # Send the POST request with the reviews as JSON
    response = req.post(url, json=payload)

    # Check if the request was successful
    if response.status_code == 200:
        return response.json()  # Return the JSON response from FastAPI
    else:
        print(f"Error: {response.status_code}")
        return None

class Sentiment(Resource):
    def get(self):
        print(self)
        url = "https://missingbreath-sentimentanalysis.hf.space/classify"

        try:
            df["predictions"] = upload_reviews(df, "Feedback")
            print( df["predictions"] )
        except:
            print("error")
            prediction = randrange(12)
        return {"output": df["predictions"] }

    def post(self):
        print(self)
        

        url = "https://missingbreath-sentimentanalysis.hf.space/classify"

        try:
            predictions = upload_reviews(df, "Feedback")
            print(predictions)
        except:
            print("error")
            prediction = randrange(12)
        return {"output":prediction}

load_dotenv()  # Load environment variables from .env file
API = os.getenv("GOOGLE_API")
if not API:
    raise ValueError("GOOGLE_API environment variable is not set")


# client = genai.Client(api_key=API)
# Set API key
# genai.configure(api_key=API)

class Chat(Resource):
    def get(self):
        return {
        'message': "chat Get"
        }

    def post(self):
        print(self)
        context = ""

        question =  request.json["question"]

        # response = client.models.generate_content(
        #     model="gemini-2.0-flash",
        #     contents="Explain how AI works",
        # )
        
        # genai.configure(api_key=API)
        # # Select a model
        # model = genai.GenerativeModel("gemini-2.0-flash")
  
        # # Generate a response
        # response = model.generate_content(question)

        url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key={API}"

        headers = {
            "Content-Type": "application/json"
        }

        data = {
            "contents": [
                {
                    "parts": [
                        {
                            "text": "You are a Chatbot Called CampGuid you should answer on user questions based on this json text :"+reviews_text+"AND the use question is :"+question
                        }
                    ]
                }
            ]
        }

        response = req.post(url, headers=headers, json=data)
        
        data = json.loads(response.text)
        
        # return {"output":response.text}
        return {"output":data["candidates"][0]["content"]["parts"][0]["text"]}