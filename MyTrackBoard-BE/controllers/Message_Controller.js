const Message_Model = require("../models/Message_Model");




module.exports = {
  sendMessage: function (req, res) {
    const Message = new Message_Model(req.body);
    //save can be create
    Message.save(req.body, function (err, items) {
      if (err) {
        res.status(404).json({
          success: false,
          message: "Echec",
          data: null,
        });
      } else {
        res
          .status(201)
          .json({ success: true, message: "Liste des Messages", data: items });
      }
    });
  },
  getAll: function (req, res) {
    Message_Model.find(function (err, items) {
      if (err) {
        res.status(406).json({
          success: false,
          message: "cannot get all",
          data: null,
        });
      } else {
        res
          .status(201)
          .json({ success: true, message: "Liste des Messages", data: items });
      }
    });
  },
  getbyId: function (req, res) {
    Message_Model.findById(req.params.id, function (err, items) {
      if (err) {
        res
          .status(406)
          .json({ success: false, message: "failed to get Message" ,data: null });
      } else {
        res
          .status(201)
          .json({ success: true, message: "Message found", data: items });
      }
    });
  },
  updateMessage: function (req, res) {
    Message_Model.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      function (err, items) {
        if (err) {
          res.status(406).json({
            success: false,
            message: "Failed to update Message",
            data: null,
          });
        } else {
          res.status(201).json({
            success: true,
            message: "Message updated successfully",
            data: items,
          });
        }
      }
    );
  },
  deleteMessage: function (req, res) {
    Message_Model.findByIdAndDelete(req.params.id, function (err, items) {
      if (err) {
        res.status(406).json({
          success: false,
          message: "Failed to delete Message",
          data: null,
        });
      } else {
        res.status(201).json({
          success: true,
          message: "Message deleted successfully",
          data: items,
        });
      }
    });
  },
};