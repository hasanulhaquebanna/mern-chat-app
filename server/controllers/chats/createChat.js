const expressAsyncHandler = require("express-async-handler");
const Chat = require("../../models/chats");
const User = require("../../models/users");

module.exports = expressAsyncHandler(async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      console.log("user id not found");
      res.sendStatus(400);
    }
    let isChat = await Chat.find({
      isGroup: false,
      $and: [
        { users: { $elemMatch: { $eq: req.user._id } } },
        { users: { $elemMatch: { $eq: userId } } },
      ],
    })
      .populate("users", "-password")
      .populate("latestMessage");

    isChat = await User.populate(isChat, {
      path: "latestMessage.sender",
      select: "name picture email",
    });

    if (isChat.length > 0) {
      res.status(200).send(isChat);
    } else {
      let newChatData = {
        chatName: "sender",
        isGroup: false,
        users: [req.user._id, userId],
      };
      const createChat = await Chat.create(newChatData);
      const newChat = await Chat.findOne({ _id: createChat._id }).populate(
        "users",
        "-password"
      );
      res.status(200).send(newChat);
    }
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});
