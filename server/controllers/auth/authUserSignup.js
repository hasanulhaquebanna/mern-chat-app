const { hashPassword } = require("../../helpers/bcrypt.js");
const generateToken = require("../../helpers/generateToken.js");

const User = require("../../models/users.js");

module.exports = async (req, res) => {
  try {
    const { name, email, password, picture } = req.body;
    if (!name || !email || !password) {
      return res.status(404).json({
        error: true,
        message: "Please fillup required credentials.",
      });
    }
    const serverEmail = email.toLowerCase();
    const newPassword = await hashPassword(password);

    const userExist = await User.findOne({ email: serverEmail });
    if (userExist) {
      return res.status(404).json({
        error: true,
        message: "User already exists!",
      });
    }
    const newUser = await User.create({
      name,
      email: serverEmail,
      password: newPassword,
      picture,
    });
    //
    newUser &&
      res.status(200).json({
        success: true,
        message: "Successfully created a new user.",
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        picture: newUser.picture,
        token: generateToken(newUser._id),
      });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
