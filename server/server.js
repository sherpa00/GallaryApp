const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const connection = require("./config/db");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({storage: storage});

// parse json files
app.use(bodyParser.json());

// home static file
app.use(express.static(path.join(__dirname, "public")));

// update static file
app.use("/update/:id",express.static(path.join(__dirname,"/views/update")));

app.get("/",(req,res) => {
    res.send("Hello");
});

// routers
const addRouter = require("./controllers/add");
const removeRouter = require("./controllers/remove");
const removeallRouter = require("./controllers/removeall");
const updateRouter = require("./controllers/update");
const showRouter = require("./controllers/show");
const gallery = require("./models/gallery");

app.use("/add",addRouter);
app.use("/remove",removeRouter);
app.use("/removeall",removeallRouter);
app.use("/update",updateRouter);
app.use("/show",showRouter);

app.listen(3000,() => {
    console.log("Server is listenig at 3000...");
})

