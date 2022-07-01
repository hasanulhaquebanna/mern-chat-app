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

    let latestMessage = await Messages.create(messageObj);
    latestMessage = await latestMessage.populate("sender", "name picture");
    latestMessage = await latestMessage.populate("chat");
    latestMessage = await Users.populate(latestMessage, {
      path: "chat.users",
      select: "name picture email",
    });
    await Chats.findByIdAndUpdate(
      req.body.chatId,
      {
        latestMessage,
      },
      {
        new: true,
      }
    );
    res.json(latestMessage);
  } catch (error) {
    return res.json({ error: error.message });
  }
});
