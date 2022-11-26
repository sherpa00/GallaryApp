const mongoose = require("mongoose");

const gallerySchema = mongoose.Schema({
    imgFile : {
        data: Buffer,
        contentType: String
    },
    fileName: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    uploadTime : {
        type: String,
        default: new Date().toDateString()
    }
});

module.exports = mongoose.model("gallery",gallerySchema);