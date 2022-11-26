const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/gallery",(err) => {
    if (!err) {
        console.log("CONNECTED TO DB...");
    }
});

