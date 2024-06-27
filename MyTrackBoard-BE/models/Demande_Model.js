const mongoose = require("mongoose");

const baseOptions = {
  discriminatorKey: 'itemtype',
  collection: 'demandes'
}

const DemandeSchema = mongoose.Schema(
  {
    type: {
      type: String,
      default:"test",
      trim: true,
    },
    description: {
      type: String,
      default:"test",
      trim: true,
    },
    status: {
      type: String,
      default:"Pending",
      trim: true,
    },
    employe: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employe",
    },
  },baseOptions,

  
  { timestamps: true }
);


module.exports = mongoose.model("Demandes", DemandeSchema);
