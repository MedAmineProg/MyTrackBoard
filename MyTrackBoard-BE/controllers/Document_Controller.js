const Document_Model = require("../models/Document_Model");




module.exports = {
  sendDocument: function (req, res) {
    req.body["file"] = req.file.filename
    const document = new Document_Model(req.body);
    document.save(req.body, function (err, item) {
      if (err) {
        res.status(404).json({
          success: false,
          message: "created document failed",
          data: null,
        });
      } else {
        res.status(201).json({
          success: true,
          message: "document created successfully",
          data: item,
        });
      }
    });
  },
  getAllDocuments: function (req, res) {
    Document_Model.find(function (err, items) {
      if (err) {
        res.status(406).json({
          success: false,
          message: "cannot get all Documents",
          data: null,
        });
      } else {
        res
          .status(201)
          .json({ success: true, message: "List of Documents", data: items });
      }
    });
  },
  getbyId: function (req, res) {
    Document_Model.findById(req.params.id, function (err, items) {
      if (err) {
        res
          .status(406)
          .json({ success: false, message: "failed to get Documents" ,data: null });
      } else {
        res
          .status(201)
          .json({ success: true, message: "Document found", data: items });
      }
    });
  },
  updateDocument: function (req, res) {

    Document_Model.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      function (err, items) {
        if (err) {
          res.status(406).json({
            success: false,
            message: "Failed to update Document",
            data: null,
          });
        } else {
          res.status(201).json({
            success: true,
            message: "Document updated successfully",
            data: items,
          });
        }
      }
    );
  },
  deleteDocument: function (req, res) {
    Document_Model.findByIdAndDelete(req.params.id, function (err, items) {
      if (err) {
        res.status(406).json({
          success: false,
          message: "Failed to delete Document",
          data: null,
        });
      } else {
        res.status(201).json({
          success: true,
          message: "Document deleted successfully",
          data: items,
        });
      }
    });
  },
};