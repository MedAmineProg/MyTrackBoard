const express = require("express");
const Demande_Controller = require("../controllers/Demande_Controller");

const route = express.Router();


route.post("/sendform", Demande_Controller.sendform);
route.get("/getAll", Demande_Controller.getAllforms);
route.get("/getbyId/:id", Demande_Controller.getbyId);
route.put("/update/:id", Demande_Controller.updateform);
route.delete("/delete/:id", Demande_Controller.deleteform);


module.exports = route;