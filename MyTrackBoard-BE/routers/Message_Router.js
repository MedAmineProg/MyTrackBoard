const express = require("express");
const Message_Controller = require("../controllers/Message_Controller");

const route = express.Router();


route.post("/sendMessage", Message_Controller.sendMessage);
route.get("/getAll", Message_Controller.getAll);
route.get("/getbyId/:id", Message_Controller.getbyId);
route.put("/update/:id", Message_Controller.updateMessage);
route.delete("/delete/:id", Message_Controller.deleteMessage);


module.exports = route;