const sharp = require('sharp');
const cloudinary = require('../config/cloudinaryConfig');
const fs = require('fs');
const path = require('path');

const compressAndUploadImage = async (req, res, next) => {
    if (!req.file) {
        return res.status(400).json({ error: 'Please upload an image' });
    }

    const inputPath = req.file.path;   // Original image ka path
    const compressedPath = path.join('uploads', `compressed-${req.file.filename}`);

    // Sharp se image compress karna
    await sharp(inputPath)
        .resize(800)
        .toFormat('jpeg')
        .jpeg({ quality: 80 })
        .toFile(compressedPath);

    // Cloudinary pe upload karna
    const result = await cloudinary.uploader.upload(compressedPath, { folder: 'uploads' });

    // Original file ko delete karenge
    fs.unlinkSync(inputPath);
    fs.unlinkSync(compressedPath);

    // Cloudinary URL ko req.file mein store karenge
    req.file.url = result.secure_url;
    next();
};

module.exports = compressAndUploadImage;
