/** @format */

const multer = require("multer");
const path = require("path");

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Specify the destination directory where uploaded files will be stored
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    ); // Specify how uploaded files will be named
  },
});

// Initialize Multer upload
const upload = multer({ storage: storage });

module.exports = upload; // Export the Multer instance
