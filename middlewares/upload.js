const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Disk Storage Configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = 'uploads/';
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath); // Folder nahi hai toh bana do
        }
        cb(null, uploadPath); // Image uploads/ folder mein save hogi
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileExtension = path.extname(file.originalname);
        cb(null, `compressed-${uniqueSuffix}${fileExtension}`); // Unique filename create karenge
    }
});

// File Filter
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!allowedTypes.includes(file.mimetype)) {
        return cb(new Error('Invalid file type. Only JPG, PNG, and JPEG are allowed.'));
    }
    cb(null, true);
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
