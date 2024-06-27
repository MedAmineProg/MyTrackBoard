const express = require("express");
const Users_Controller = require("../controllers/Users_Controller");

const route = express.Router();
route.post("/login", Users_Controller.login);
route.post("/refreshtoken",Users_Controller.refresh_token)
route.post("/logout",Users_Controller.logout)


module.exports = route;