const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const { TOKEN } = require("../env");
const User = require("../models/users");

module.exports = asyncHandler(async (req, res, next) => {
  console.log(req.headers.authorization.split(" ")[1]);
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization?.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
      const decodeToken = await jwt.verify(token, TOKEN);

      if (!decodeToken) {
        return res.json({ error: "Unauthorized! Please login again." });
      }
      req.user = await User.findById(decodeToken.id).select("-password");
      next();
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
