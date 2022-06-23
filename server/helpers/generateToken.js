const jwt = require("jsonwebtoken");
const { TOKEN } = require("../env");

module.exports = (id) => {
  return jwt.sign({ id }, TOKEN, {
    expiresIn: "4d",
  });
};
