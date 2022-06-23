const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  const salt = await bcrypt.genSaltSync(10);
  return await bcrypt.hash(password, salt);
};

const comparePassword = async (userPassword, serverPassword) => {
  return await bcrypt.compare(password, serverPassword);
};

module.exports = { hashPassword, comparePassword };
