const expressAsyncHandler = require("express-async-handler");
const Chat = require("../../models/chats");
const User = require("../../models/users");

module.exports = expressAsyncHandler(async (req, res) => {
  try {
    const chats = await Chat.find({
      users: { $elemMatch: { $eq: req.user._id } },
    })
      .populate("users", "-password")
      .populate("groupAdmin", "-password")
      .populate("latestMessage")
      .sort({ updateAt: -1, createdAt: -1 });

    if (chats) {
      const allchats = await User.populate(chats, {
        path: "latestMessage.sender",
        select: "name picture email",
      });
      res.status(200).send(allchats);
    }
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});
