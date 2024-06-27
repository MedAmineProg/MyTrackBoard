const mongoose = require("mongoose");

const dotenv = require("dotenv");

const DB = process.env.BD_URI;

require("dotenv").config();

mongoose.Promise = global.Promise;

const Database = mongoose.connect(DB, { useNewUrlParser: true }, (err) => {
  if (!err) {
    console.log("mongodb connected successfully");
  } else {
    console.log("failed to connect with mongodb" + err);
  }
});

module.exports = Database;