const Horaire_Model = require("../models/Horaire_Model");




module.exports = {
  setstarttime: function (req, res) {
    const horaire = new Horaire_Model(req.body);
    //save can be create
    horaire.save(req.body, function (err, items) {
      if (err) {
        res.status(404).json({
          success: false,
          message: "Time Setting Failed",
          data: null,
        });
      } else {
        res
          .status(201)
          .json({ success: true, message: "List of Time", data: items });
      }
    });
  },
  getAlltimes: function (req, res) {
    Horaire_Model.find(function (err, items) {
      if (err) {
        res.status(406).json({
          success: false,
          message: "cannot get all times",
          data: null,
        });
      } else {
        res
          .status(201)
          .json({ success: true, message: "List of times", data: items });
      }
    });
  },
  getbyId: function (req, res) {
    Horaire_Model.findById(req.params.id, function (err, items) {
      if (err) {
        res
          .status(406)
          .json({ success: false, message: "failed to get employee" ,data: null });
      } else {
        res
          .status(201)
          .json({ success: true, message: "employe found", data: items });
      }
    });
  },
  updatetime: function (req, res) {
    Horaire_Model.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      function (err, items) {
        if (err) {
          res.status(406).json({
            success: false,
            message: "Failed to update Time",
            data: null,
          });
        } else {
          res.status(201).json({
            success: true,
            message: "Time updated successfully",
            data: items,
          });
        }
      }
    );
  },
  deletetime: function (req, res) {
    Horaire_Model.findByIdAndDelete(req.params.id, function (err, items) {
      if (err) {
        res.status(406).json({
          success: false,
          message: "Failed to delete Time",
          data: null,
        });
      } else {
        res.status(201).json({
          success: true,
          message: "Time deleted successfully",
          data: items,
        });
      }
    });
  },
};