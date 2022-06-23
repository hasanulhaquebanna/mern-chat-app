const mongoose = require("mongoose");

const userModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      unique: false,
    },
    password: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      default: "https://img.icons8.com/ios-filled/344/user-male-circle.png",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userModel);
