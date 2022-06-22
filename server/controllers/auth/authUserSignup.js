const asyncHandler = require("express-async-handler");
const generateToken = require("../../helpers/generateToken.js");

const User = require("../../models/users.js");

module.exports = asyncHandler(async (req, res) => {
  const { name, email, password, picture } = req.body;
  console.log(name, email, password, picture);
  try {
    if (!name || !email || !password) {
      return res.status(404).json({
        error: true,
        message: "Please fillup required credentials.",
      });
      const useExist = await User.findOne({ email });
      if (userExist) {
        return res.status(404).json({
          error: true,
          message: "User already exists!",
        });
      }
      const user = await User.create({
        name,
        email,
        password,
        picture,
      });
      user.password = undefined;
      user &&
        res.status(200).json({
          success: true,
          message: "Successfully created a new user.",
          ...user,
          token: generateToken(user._id),
        });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});
