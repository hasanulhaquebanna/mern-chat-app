const asynHandler = require("express-async-handler");

const { comparePassword } = require("../../helpers/bcrypt.js");
const generateToken = require("../../helpers/generateToken.js");
const User = require("../../models/users.js");

module.exports = asynHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.json({
        error: true,
        message: "Please fillup required credentials.",
      });
    }
    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.json({
        error: true,
        message: "There is no user associated with this email!",
      });
    }

    const matchPassword = await comparePassword(password, userExist.password);

    if (!matchPassword) {
      return res.json({
        error: true,
        message: "Password is wrong!",
      });
    }

    matchPassword &&
      userExist &&
      res.status(200).json({
        success: true,
        message: "Successfully logged in.",
        id: userExist._id,
        name: userExist.name,
        email: userExist.email,
        picture: userExist.picture,
        token: generateToken(userExist._id),
      });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
