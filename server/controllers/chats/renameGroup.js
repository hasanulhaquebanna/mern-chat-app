const expressAsyncHandler = require("express-async-handler");
const Chat = require("../../models/chats");
const User = require("../../models/users");

module.exports = expressAsyncHandler(async (req, res) => {
  const { chatId, chatName } = req.body;
  try {
    const updateGroup = await Chat.findOneAndUpdate(
      { _id: chatId },
      { chatName },
      { new: true }
    )
      .populate("users", "-password")
      .populate("groupAdmin", "-password");
    res.status(200).send(updateGroup);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});
