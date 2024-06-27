const express = require("express");
const Paiement_Controller = require("../controllers/Paiement_Controller");

const route = express.Router();


route.post("/setPaiement", Paiement_Controller.setPaiement);
route.get("/getAll", Paiement_Controller.getAll);
route.get("/getbyId/:id", Paiement_Controller.getbyId);
route.put("/update/:id", Paiement_Controller.updatePaiement);
route.delete("/delete/:id", Paiement_Controller.deletePaiement);


module.exports = route;