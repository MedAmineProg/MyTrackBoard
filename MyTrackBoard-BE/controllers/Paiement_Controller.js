const Paiement_Model = require("../models/Paiement_Model");




module.exports = {
  setPaiement: function (req, res) {
    const Paiement = new Paiement_Model(req.body);
    //save can be create
    Paiement.save(req.body, function (err, items) {
      if (err) {
        res.status(404).json({
          success: false,
          message: "Echec",
          data: null,
        });
      } else {
        res
          .status(201)
          .json({ success: true, message: "Liste des Paiements", data: items });
      }
    });
  },
  getAll: function (req, res) {
    Paiement_Model.find(function (err, items) {
      if (err) {
        res.status(406).json({
          success: false,
          message: "cannot get all",
          data: null,
        });
      } else {
        res
          .status(201)
          .json({ success: true, message: "Liste des Paiements", data: items });
      }
    });
  },
  getbyId: function (req, res) {
    Paiement_Model.findById(req.params.id, function (err, items) {
      if (err) {
        res
          .status(406)
          .json({ success: false, message: "failed to get Paiement" ,data: null });
      } else {
        res
          .status(201)
          .json({ success: true, message: "Paiement found", data: items });
      }
    });
  },
  updatePaiement: function (req, res) {
    Paiement_Model.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      function (err, items) {
        if (err) {
          res.status(406).json({
            success: false,
            message: "Failed to update Paiement",
            data: null,
          });
        } else {
          res.status(201).json({
            success: true,
            message: "Paiement updated successfully",
            data: items,
          });
        }
      }
    );
  },
  deletePaiement: function (req, res) {
    Paiement_Model.findByIdAndDelete(req.params.id, function (err, items) {
      if (err) {
        res.status(406).json({
          success: false,
          message: "Failed to delete Paiement",
          data: null,
        });
      } else {
        res.status(201).json({
          success: true,
          message: "Paiement deleted successfully",
          data: items,
        });
      }
    });
  },
};