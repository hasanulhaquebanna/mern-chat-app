const mongoose = require("mongoose");

const userModel = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    picture: {
      type: String,
      default: "https://img.icons8.com/ios-filled/344/user-male-circle.png",
    },
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("User", userModel);
