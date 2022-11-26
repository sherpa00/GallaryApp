const express = require("express");
const router = express.Router();
const GalleryModel = require("../models/gallery");

router.get("/",(req,res) => {
    res.send("Remove All");
});

router.delete("/",async (req,res) => {
    try {
        let removedAll = await GalleryModel.deleteMany({});
        res.json({
            success: true,
            output: removedAll
        });
    } catch (err) {
        res.json({
            success: false,
            output: err
        })
    };
})

module.exports = router;