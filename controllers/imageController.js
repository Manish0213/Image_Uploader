const Image = require('../models/image');
const cloudinary = require('../config/cloudinaryConfig');

// Upload Image Controller
const uploadImage = async (req, res) => {
    const image = new Image({
        filename: req.file.filename,
        url: req.file.url  // Cloudinary URL ko database mein save karenge
    });

    await image.save();
    res.status(201).json({ message: 'Image uploaded successfully', url: image.url });
};

// Get Image by ID
const getImageById = async (req, res) => {
    const { id } = req.params;
    const image = await Image.findById(id);
    if (!image) return res.status(404).json({ error: 'Image not found' });

    res.redirect(image.url); // Cloudinary URL pe redirect karega
};

// Delete Image
const deleteImage = async (req, res) => {
    const { id } = req.params;
    const image = await Image.findByIdAndDelete(id);
    if (!image) return res.status(404).json({ error: 'Image not found' });

    // Cloudinary se file delete karna
    const publicId = image.url.split('/').pop().split('.')[0];
    await cloudinary.uploader.destroy(`uploads/${publicId}`);

    res.status(200).json({ message: 'Image deleted successfully' });
};

module.exports = { uploadImage, getImageById, deleteImage };
