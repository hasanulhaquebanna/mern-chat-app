const asyncHandler = require("express-async-handler");

const Messages = require("../../models/messages");

module.exports = asyncHandler(async (req, res) => {
  try {
    const messages = await Messages.find({ chat: req.params.chatId })
      .populate("sender", "name pictur email")
      .populate("chat");

    res.json(messages);
  } catch (error) {
    return res.json({ error: error.message });
  }
});
