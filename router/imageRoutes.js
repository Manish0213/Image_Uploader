const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload'); // Multer middleware
const compressAndUploadImage = require('../middlewares/compressImage'); // Compression middleware
const { uploadImage, getImageById, deleteImage } = require('../controllers/imageController');

router.post('/upload', upload.single('image'), compressAndUploadImage, uploadImage);
router.get('/images/:id', getImageById);
router.delete('/images/:id', deleteImage);

module.exports = router;
