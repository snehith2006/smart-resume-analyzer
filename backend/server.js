const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Configure storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// API: Test
app.get("/", (req, res) => {
  res.send("Backend Running ✅");
});

// API: Upload Resume
app.post("/upload", upload.single("resume"), (req, res) => {
  console.log("Uploaded File → ", req.file);
  res.json({
    message: "Resume uploaded successfully!",
    file: req.file,
  });
});

app.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
});
