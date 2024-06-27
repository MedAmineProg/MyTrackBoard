const Employe_Model = require("../models/Employe_Model");

const bcrypt = require("bcrypt")



module.exports = {
  register: function (req, res) {
    req.body["file"] = req.file.filename
    const employe = new Employe_Model(req.body);
    //save can be create
    employe.save(req.body, function (err, items) {
      if (err) {
        res.status(404).json({
          success: false,
          message: "created employe failed",
          data: null,
        });
      } else {
        res
          .status(201)
          .json({ success: true, message: "List of employees", data: items });
      }
    });
  },
  getAllemployees: function (req, res) {
    Employe_Model.find(function (err, items) {
      if (err) {
        res.status(406).json({
          success: false,
          message: "cannot get all employees",
          data: null,
        });
      } else {
        res
          .status(201)
          .json({ success: true, message: "List of employees", data: items });
      }
    });
  },
  getbyId: function (req, res) {
    Employe_Model.findById(req.params.id, function (err, items) {
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
  getbyName: function (req, res) {
    Employe_Model.find({ nom: req.query.nom }, function (err, items) {
      if (err) {
        res.status(406).json({
          success: false,
          message: "cannot get employees by listening",
          data: null,
        });
      } else {
        res
          .status(201)
          .json({ success: true, message: "employe found", data: items });
      }
    });
  },
  updateemploye: function (req, res) {
    req.body["file"] = req.file.filename
    if (req.body.password) {
      req.body.password = bcrypt.hashSync(
        req.body.password,10
      ).toString();
    }
    Employe_Model.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      function (err, items) {
        if (err) {
          res.status(406).json({
            success: false,
            message: "Failed to update employe",
            data: null,
          });
        } else {
          res.status(201).json({
            success: true,
            message: "employe updated successfully",
            data: items,
          });
        }
      }
    );
  },
  deleteclient: function (req, res) {
    Employe_Model.findByIdAndDelete(req.params.id, function (err, items) {
      if (err) {
        res.status(406).json({
          success: false,
          message: "Failed to delete employe",
          data: null,
        });
      } else {
        res.status(201).json({
          success: true,
          message: "employe deleted successfully",
          data: items,
        });
      }
    });
  },
};
