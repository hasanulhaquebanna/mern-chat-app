const asyncHandler = require("express-async-handler");

const Messages = require("../../models/messages");
const Users = require("../../models/users");
const Chats = require("../../models/chats");

module.exports = asyncHandler(async (req, res) => {
  try {
    const { message, chatId } = req.body;
    if (!message || !chatId) {
      return res.json({ error: "Invalid data" });
    }

    const messageObj = {
      sender: req.user._id,
      message,
      chatId,
    };

    let messages = await Messages.create(messageObj);

    messages = await messages.populate("sender", "name picture");
    messages = await messages.populate("chat");
    messages = await Users.populate(messages, {
      path: "chat.users",
      select: "name picture email",
    });

    await Chats.findByIdAndUpdate(req.body.chatId, {
      latestMessage: messages,
    });
    res.json(messages);
  } catch (error) {
    return res.json({ error: error.message });
  }
});
