const mongoose = require("mongoose");
const demandeModel = require("./Demande_Model");

const PaiementSchema = mongoose.Schema({
  type_paie: {
    type: String,
    required: true,
    trim: true,
  },
  date_depot: {
    type: Date,
    trim: true,
  },
});
PaiementSchema.pre("save", function (next) {
  this.date_depot = Date.now();
  next();
});

const Paiement = demandeModel.discriminator("Paiement", PaiementSchema);

module.exports = mongoose.model("Paiement");
