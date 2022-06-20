require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();

//
const { DB, PORT } = require("./env");

// server middleware
app.use(cors());

mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server and Database successfully working with port ${PORT}`);
    })
  )
  .catch((err) => console.log(err));
