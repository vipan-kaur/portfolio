const express = require("express");
// const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// test route
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// // DB connection
// mongoose.connect(process.env.MONGO_URL)
//   .then(() => console.log("MongoDB Connected ✅"))
//   .catch(err => console.log(err));

// server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});