module.exports = async (req, res) => {
  res.status(401).json({
    error: true,
    message: "Login failed",
  });
};
