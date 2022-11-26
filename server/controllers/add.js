const express = require("express");
const router = express.Router();
const GalleryModel = require("../models/gallery");
// multer lib for storing images files
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({storage: storage});

router.get("/",(req,res) => {
    res.send("Add");
});

router.post("/",upload.single("file"), async (req,res) => {
    // !req.file => no file selected;
    if (!req.file) {
        res.json({
            success: false,
            output: {
                message: "Image is not selected"
            }
        })
    } else {
        try {
            let newGallery = new GalleryModel({
                imgFile : {
                    data: req.file.buffer,
                    contentType: req.file.mimetype
                },
                fileName: req.file.originalname,
                title: req.body.title,
                description: req.body.description
            });
            let addGallery = await newGallery.save();
            res.json({
                success: true,
                output: addGallery
            });
        } catch (err) {
            res.json({
                success: false,
                output: err
            })
        }
    }
});

module.exports = router;