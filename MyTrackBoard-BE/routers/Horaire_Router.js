const express = require("express");
const Horaire_Controller = require("../controllers/Horaire_Controller");

const route = express.Router();


route.post("/settime", Horaire_Controller.setstarttime);
route.get("/getAll", Horaire_Controller.getAlltimes);
route.get("/getbyId/:id", Horaire_Controller.getbyId);
route.put("/update/:id", Horaire_Controller.updatetime);
route.delete("/delete/:id", Horaire_Controller.deletetime);


module.exports = route;