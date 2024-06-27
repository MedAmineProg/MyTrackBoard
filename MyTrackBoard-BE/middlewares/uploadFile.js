const multer = require("multer");

const Storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./storages");
  },
  filename: function (req, file, cb) {
    const files = Date.now() + "-" + file.originalname;
    cb(null, file.fieldname + "-" + files);
  },
});

const upload = multer({
  storage: Storage,
  limits: { fileSize: 1024 * 1024 * 1024 * 10 },
  Filterfile: function (req, file, cb) {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "video/mp4" ||
      "application/pdf"
    ) {
      cb(null, true);
    } else {
      cb(new Error("please enter a fitting file"));
    }
  },
});

module.exports = upload;
