const expressAsyncHandler = require("express-async-handler");
const Chat = require("../../models/chats");
const User = require("../../models/users");

module.exports = expressAsyncHandler(async (req, res) => {
  const { chatId, userId } = req.body;
  try {
    const addToGroup = await Chat.findOneAndUpdate(
      { _id: chatId },
      { $push: { users: userId } },
      { new: true }
    )
      .populate("users", "-password")
      .populate("groupAdmin", "-password");
    res.status(200).send(addToGroup);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});
