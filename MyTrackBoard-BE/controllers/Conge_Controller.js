const Conge_Model = require("../models/Conge_Model");




module.exports = {
  setconge: function (req, res) {
    const conge = new Conge_Model(req.body);
    //save can be create
    conge.save(req.body, function (err, items) {
      if (err) {
        res.status(404).json({
          success: false,
          message: "Echec",
          data: null,
        });
      } else {
        res
          .status(201)
          .json({ success: true, message: "Liste des conges", data: items });
      }
    });
  },
  getAll: function (req, res) {
    Conge_Model.find(function (err, items) {
      if (err) {
        res.status(406).json({
          success: false,
          message: "cannot get all",
          data: null,
        });
      } else {
        res
          .status(201)
          .json({ success: true, message: "Liste des conges", data: items });
      }
    });
  },
  getbyId: function (req, res) {
    Conge_Model.findById(req.params.id, function (err, items) {
      if (err) {
        res
          .status(406)
          .json({ success: false, message: "failed to get Conge" ,data: null });
      } else {
        res
          .status(201)
          .json({ success: true, message: "conge found", data: items });
      }
    });
  },
  updateconge: function (req, res) {
    Conge_Model.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      function (err, items) {
        if (err) {
          res.status(406).json({
            success: false,
            message: "Failed to update conge",
            data: null,
          });
        } else {
          res.status(201).json({
            success: true,
            message: "conge updated successfully",
            data: items,
          });
        }
      }
    );
  },
  deleteconge: function (req, res) {
    Conge_Model.findByIdAndDelete(req.params.id, function (err, items) {
      if (err) {
        res.status(406).json({
          success: false,
          message: "Failed to delete Conge",
          data: null,
        });
      } else {
        res.status(201).json({
          success: true,
          message: "Conge deleted successfully",
          data: items,
        });
      }
    });
  },
};