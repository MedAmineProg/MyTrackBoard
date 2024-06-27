const express = require("express");
const Employe_Controller = require("../controllers/Employe_Controller");

const route = express.Router();
const upload=require("../middlewares/uploadFile")

route.post("/register",upload.single("file"), Employe_Controller.register);
// route.post("/register", Employe_Controller.register);
route.get("/getAll", Employe_Controller.getAllemployees);
route.get("/getbyId/:id", Employe_Controller.getbyId);
route.get("/getbyname", Employe_Controller.getbyName);
route.put("/update/:id",upload.single("file"), Employe_Controller.updateemploye);
// route.put("/update/:id",Employe_Controller.updateemploye);
route.delete("/delete/:id", Employe_Controller.deleteclient);


module.exports = route;