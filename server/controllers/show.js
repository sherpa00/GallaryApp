const express = require("express");
const router = express.Router();
const GalleryModel = require("../models/gallery");

router.get("/",async (req,res) => {
    try {
        let showGallery = await GalleryModel.find({});
        res.json({
            success: true,
            output: showGallery
        })
        
    } catch (err) {
        res.json({
            success: false,
            output: err
        })
    }
});

router.get("/gallery/:id",async (req,res) => {
    try {
        let showGallery = await GalleryModel.findById(req.params.id);
        res.json({
            success: true,
            output: showGallery
        })
    } catch(err) {
        res.json({
            success: false,
            output: err
        })
    }
})


module.exports = router;