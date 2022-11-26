const express = require("express");
const router = express.Router();
const GalleryModel = require("../models/gallery");

router.get("/",(req,res) => {
    res.send("Remove");
});

router.delete("/:id",async (req,res) => {
    try {
        let removeGallery = await GalleryModel.findByIdAndRemove(req.params.id);
        res.json({
            success: true,
            output: removeGallery
        });
    } catch (err) {
        res.json({
            success: false,
            output: err
        })
    }
});

module.exports = router;