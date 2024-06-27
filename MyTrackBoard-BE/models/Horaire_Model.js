const mongoose = require("mongoose");
const HoraireSchema = mongoose.Schema(
  {
    heure_arrive: {
      type: String,
      required: true,
      trim: true,
        
      },
    heure_pause: {
      type: String,
      required: true,
      trim: true,
      
    },
    heure_sortie: {
      type: String,
      required: true,
      trim: true,
        
      },
      employe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employe",
      },

  },
  { timestamps: true }
);
module.exports = mongoose.model("Horaire", HoraireSchema);