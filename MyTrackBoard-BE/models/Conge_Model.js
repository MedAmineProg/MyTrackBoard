const mongoose = require("mongoose");
const demandeModel = require("./Demande_Model");
const moment = require("moment")

const CongeSchema = new mongoose.Schema(
  {
    type_conge: {
        type:String,
        required: true,
        trim: true,
      },
    date_debutconge: {
      type:Date,
      required: true,
      trim: true,
    },
    date_finconge: {
        type: Date,
        required: true,
        trim: true,
      },
    duree_conge: {
        type: String,
        required: false,
        trim: true,
      },
  },

  );
  CongeSchema.pre("save",function(next){
    var startTime = moment(this.date_debutconge);
    var endTime = moment(this.date_finconge);
    var diff = endTime.diff(startTime);
    console.log(diff);
    var duration = moment.duration(diff);
    this.duree_conge=duration.asDays()+" jours"

    next()
  })







const Conge = demandeModel.discriminator("Conge",CongeSchema)


module.exports = mongoose.model("Conge");
