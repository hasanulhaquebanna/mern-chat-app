require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");
const app = express();

//
const { DB, PORT } = require("./env");

// server middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "PUT", "DELETE", "UPDATE", "POST"],
    credentials: true,
  })
);
app.use(
  cookieSession({
    name: "session",
    keys: ["kothabatra"],
    maxAge: 24 * 60 * 60 * 200,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// database and port connetion
mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server and Database successfully working with port ${PORT}`);
    })
  )
  .catch((err) => console.log(err));
