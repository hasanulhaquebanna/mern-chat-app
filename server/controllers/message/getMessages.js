const asyncHandler = require("express-async-handler");

const Messages = require("../../models/messages");

module.exports = asyncHandler(async (req, res) => {
  try {
    const chat = await Messages.find({ chat: req.params.chatId })
      .populate("sender", "name picture")
      .populate("chat");

    res.json(chat);
  } catch (error) {
    return res.json({ error: error.message });
  }
});
