const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

const comparePassword = async (userPassword, serverPassword) => {
  return await bcrypt.compare(userPassword, serverPassword);
};

module.exports = { hashPassword, comparePassword };
