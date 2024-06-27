const express = require("express");
const Document_Controller = require("../controllers/Document_Controller");

const route = express.Router();
const upload=require("../middlewares/uploadFile")


route.post("/upload",upload.single("file"), Document_Controller.sendDocument);
route.get("/getAll", Document_Controller.getAllDocuments);
route.get("/getbyId/:id", Document_Controller.getbyId);
route.put("/update/:id",upload.single("file"), Document_Controller.updateDocument);
route.delete("/delete/:id", Document_Controller.deleteDocument);


module.exports = route;