const express = require("express");
const Conge_Controller = require("../controllers/Conge_Controller");

const route = express.Router();


route.post("/setconge", Conge_Controller.setconge);
route.get("/getAll", Conge_Controller.getAll);
route.get("/getbyId/:id", Conge_Controller.getbyId);
route.put("/update/:id", Conge_Controller.updateconge);
route.delete("/delete/:id", Conge_Controller.deleteconge);


module.exports = route;