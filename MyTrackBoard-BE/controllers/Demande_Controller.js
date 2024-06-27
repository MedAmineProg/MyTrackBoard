const Demande_Model = require("../models/Demande_Model");




module.exports = {
  sendform: function (req, res) {
    const demande = new Demande_Model(req.body);
    //save can be create
    demande.save(req.body, function (err, items) {
      if (err) {
        res.status(404).json({
          success: false,
          message: "Sending Form Failed",
          data: null,
        });
      } else {
        res
          .status(201)
          .json({ success: true, message: "List of Forms", data: items });
      }
    });
  },
  getAllforms: function (req, res) {
    Demande_Model.find(function (err, items) {
      if (err) {
        res.status(406).json({
          success: false,
          message: "cannot get all forms",
          data: null,
        });
      } else {
        res
          .status(201)
          .json({ success: true, message: "List of Forms", data: items });
      }
    });
  },
  getbyId: function (req, res) {
    Demande_Model.findById(req.params.id, function (err, items) {
      if (err) {
        res
          .status(406)
          .json({ success: false, message: "failed to get Forms" ,data: null });
      } else {
        res
          .status(201)
          .json({ success: true, message: "Form found", data: items });
      }
    });
  },
  updateform: function (req, res) {
    Demande_Model.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      function (err, items) {
        if (err) {
          res.status(406).json({
            success: false,
            message: "Failed to update Form",
            data: null,
          });
        } else {
          res.status(201).json({
            success: true,
            message: "Form updated successfully",
            data: items,
          });
        }
      }
    );
  },
  deleteform: function (req, res) {
    Demande_Model.findByIdAndDelete(req.params.id, function (err, items) {
      if (err) {
        res.status(406).json({
          success: false,
          message: "Failed to delete form",
          data: null,
        });
      } else {
        res.status(201).json({
          success: true,
          message: "Form deleted successfully",
          data: items,
        });
      }
    });
  },
};