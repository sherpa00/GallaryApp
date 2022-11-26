const express = require("express");
const router = express.Router();
const GalleryModel = require("../models/gallery");
const multer = require("multer");
const storage = multer.memoryStorage();
const update = multer({storage: storage});

router.get("/",(req,res) => {
    res.send("update");
});

router.patch("/file/:id",update.single("file"),async (req,res) => {
    try {
        let updatedGallery = await GalleryModel.findByIdAndUpdate(req.params.id,{
            imgFile: {
                data: req.file.buffer,
                contentType: req.file.mimetype
            }
        });
        res.json({
            success: true,
            output: updatedGallery
        });
    } catch(err) {
        res.json({
            success: false,
            output: err
        })
    }
})

router.patch("/title/:id",async (req,res) => {
    try {
        let updateGallery = await GalleryModel.findByIdAndUpdate(req.params.id,{title: req.body.title});
        res.json({
            success: true,
            output: updateGallery
        })
    } catch (err) {
        res.json({
            success: false,
            output: err
        })
    }
});


router.patch("/description/:id",async (req,res) => {
    try {
        let updateGallery = await GalleryModel.findByIdAndUpdate(req.params.id,{description: req.body.description});
        res.json({
            success: true,
            output: updateGallery
        })
    } catch (err) {
        res.json({
            success: false,
            output: err
        })
    }
})

module.exports = router;