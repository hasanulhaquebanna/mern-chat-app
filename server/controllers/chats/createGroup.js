const expressAsyncHandler = require("express-async-handler");
const Chat = require("../../models/chats");
const User = require("../../models/users");

module.exports = expressAsyncHandler(async (req, res) => {
  if (!req.body.users && !req.body.name) {
    res.json({
      error: true,
      message: "users and name are required",
    });
  }
  let users = JSON.parse(req.body.users);
  if (users.length < 2) {
    res.json({
      error: true,
      message: "More than two members are required",
    });
  }
  users.push(req.user);

  const createGroup = await Chat.create({
    chatName: req.body.name,
    users,
    isGroup: true,
    groupAdmin: req.user._id,
  });
  if (createGroup) {
    const group = await Chat.findOne({ _id: createGroup._id })
      .populate("users", "-password")
      .populate("groupAdmin", "-password");
  }
  res.status(200).json({
    success: true,
    message: "Group created successfully",
  });
});
