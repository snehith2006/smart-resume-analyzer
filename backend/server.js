const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Smart Resume Analyzer Backend Running ✅");
});

app.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
});
