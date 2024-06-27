const mongoose = require("mongoose");
const userModel = require("./Users_Model");
const employeSchema = new mongoose.Schema({
  situ_fam: {
    type: String,
    default:"marié",
    trim: true,
  },
  tel:{
    type:Number,
    required:true,
    trim:true
},
file: {
  type: String,
  trim: true,
},
horaire: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Horaire",
  },
],
demandes: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Demandes",
  },
],
documents: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Documents",
  },
],
});


const Employe = userModel.discriminator("Employe",employeSchema)

module.exports = mongoose.model("Employe");