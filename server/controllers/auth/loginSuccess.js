module.exports = async (req, res) => {
  try {
    if (req.user) {
      res.status(200).json({
        error: false,
        message: "Successfully logged in",
        user: req.user,
      });
    } else {
      res.status(401).json({
        error: true,
        message: "Unauthorized",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message,
    });
  }
};
