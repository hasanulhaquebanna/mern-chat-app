const User = require("../../models/users.js");

module.exports = async (req, res) => {
  const { name, email, password, picture } = req.body;
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
      const user = await User.create({
        name,
        email,
        password,
        picture,
      });
      user &&
        res.status(200).json({
          success: true,
          message: "Successfully created a new user.",
        });
    }
  } catch (error) {}
};
