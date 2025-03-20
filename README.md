
# Image Uploader

A Node.js application for uploading, compressing, and storing images using Multer, Sharp, and Cloudinary.



## Clone this repository:
git clone https://github.com/Manish0213/Image_Uploader.git

cd Image_Uploader
## Install dependencies:
npm install

## Create .env file and add the following:
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
MONGO_URI=your_mongo_connection_string
PORT=3000

## Start the server:
npm start

## API Documentation — Image Uploader App

## Base URL
http://localhost:5000/api

## API Endpoints
[POST] Upload Image

[GET] Get Image by ID

[DELETE] Delete Image
## 1. Upload Image
[POST] /upload

🔸 Description: Upload a new image, compress it, and store the URL in Cloudinary.

🔹 Request Body

Body Type: form-data

Key: image (Type: File)

Value: (Select your image file)

🔹Sample Request (Postman Example)

Body (form-data):

    Key: image | Value: [Upload a JPG/PNG file]

## 2. Get Image by ID
[GET] /images/:id

🔸 Description: Fetch image URL from database using its ID.

🔹 Sample Request

    GET http://localhost:5000/api/images/67db9ef25817284b484f7287

## 3. Delete Image
[DELETE] /images/:id

🔸 Description: Delete an image from both Cloudinary and MongoDB using its ID.

🔹 Sample Request

    DELETE http://localhost:5000/api/images/67db9ef25817284b484f7287
