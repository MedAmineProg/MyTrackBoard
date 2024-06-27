const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors=require("cors")
// from postman to terminal
const morgan = require("morgan");


require("dotenv").config();

const Database = require("./config/database");

//integration back front important
var corsOption={
  origin:"http://localhost:3001",
  optionSuccessStatus:200
}

app.use(cors("corsOption"))

const PORT = process.env.PORT;

app.use(express.json());
app.use(morgan('tiny'))
app.use(express.urlencoded({ extended: false }));

const employe=require("./routers/Employe_Router");

const users = require("./routers/Users_Router")

const time = require("./routers/Horaire_Router")

const demande = require("./routers/Demande_Router")

const conge = require("./routers/Conge_Router")

const document = require("./routers/Document_Router")

const paiement = require("./routers/Paiement_Router")

const message = require("./routers/Message_Router")

app.use("/employe",employe);

app.use("/user",users);

app.use("/time",time);

app.use("/demande",demande);

app.use("/conge",conge);

app.use("/document",document);

app.use("/paiement",paiement);

app.use("/message",message);

app.use("/calendar",require("./controllers/Calendar_Controller"));

app.get("/getImage/:img", function (req, res) {
  res.sendFile(__dirname + "/storages/" + req.params.img);
}); 

app.listen(PORT, function () {
  console.log(`server running on http://localhost:${PORT}`);
});