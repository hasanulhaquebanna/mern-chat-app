const { comparePassword } = require("../../helpers/bcrypt.js");
const User = require("../../models/users.js");

module.exports = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.status(404).json({
        error: true,
        message: "Please fillup required credentials.",
      });
    }
    const userExist = await User.findOne({ email });

    if (!userExist) {
      res.status(404).json({
        error: true,
        message: "There is no user associated with this email!",
      });
    }

    const matchPassword = comparePassword(password, userExist.password);

    if (!matchPassword) {
      res.status(404).json({
        error: true,
        message: "Password is wrong!",
      });
    }

    matchPassword &&
      userExist &&
      res.status(200).json({
        success: true,
        message: "Successfully logged in.",
      });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
