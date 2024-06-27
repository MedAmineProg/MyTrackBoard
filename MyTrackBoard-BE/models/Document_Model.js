const mongoose = require("mongoose");

const DocumentSchema = mongoose.Schema(
  {
    file: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
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

module.exports = mongoose.model("Documents", DocumentSchema);
