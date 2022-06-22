const asyncHandler = require("express-async-handler");

const User = require("../../models/users.js");

module.exports = asyncHandler(async (req, res) => {
  const { name, email, password, picture } = req.body;
  console.log(name, email, password, picture);

  try {
    if (!name || !email || !password) {
      res.status(404).json({
        error: true,
        message: "Please fillup required credentials.",
      });
      const useExist = await User.findOne({ email });
      if (userExist) {
        res.status(404).json({
          error: true,
          message: "User already exists!",
        });
      }
      const user = await new User({
        name,
        email,
        password,
        picture,
      }).save();
      user &&
        res.status(200).json({
          success: true,
          message: "Successfully created a new user.",
        });
    }
  } catch (error) {}
});
