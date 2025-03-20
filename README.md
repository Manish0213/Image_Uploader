1. Clone this repository:
git clone https://github.com/username/Image-Uploader.git
cd Image_Uploader

3. Install dependencies:
npm install

4. Create .env file and add the following:
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
MONGO_URI=your_mongo_connection_string
PORT=3000

5. Start the server:
npm start





                          ----- API Endpoints -----
1.      --------------- Upload Image ----------------
[POST] http://localhost:3000/api/upload
Description: Upload a new image, compress it, and store the URL in Cloudinary.

Request Body
Body Type: form-data
Key: image (Type: File)
Value: (Select your image file)

Sample Request (Postman Example)
Body (form-data):
Key: image | Value: [Upload a JPG/PNG file]

Success Response
{
  "message": "Image uploaded successfully",
  "url": "https://res.cloudinary.com/demo/image/upload/v1695678901/uploads/compressed-1695678901234.jpg"
}

 2. -------------------------- Get Image by ID ------------
[GET] http://localhost:3000/api/images/:id
Description: Fetch image URL from database using its ID.
Sample Request
GET /api/images/67db9ef25817284b484f7287
Success Response
[Redirects to Cloudinary URL]

3. --------------------- Delete Image ----------------------
[DELETE] http://localhost:3000/api/images/:id
Description: Delete an image from both Cloudinary and MongoDB using its ID.
Sample Request ->
DELETE /api/images/67db9ef25817284b484f7287

 Success Response
 {
  "message": "Image deleted successfully"
}
