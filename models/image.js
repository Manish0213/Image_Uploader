const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    filename: String,
    url: String,
    uploadDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Image', imageSchema);
