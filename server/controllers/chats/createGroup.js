const expressAsyncHandler = require("express-async-handler");
const Chat = require("../../models/chats");
const User = require("../../models/users");

module.exports = expressAsyncHandler(async (req, res) => {
  if (!req.body.users || !req.body.name) {
    return res.json({
      error: true,
      message: "users and name are required",
    });
  }
  let users = JSON.parse(req.body.users);
  if (users.length < 2) {
    return res.json({
      error: true,
      message: "More than two members are required",
    });
  }
  users.push(req.user);
  try {
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

      res.status(200).json({
        success: true,
        message: "Group created successfully",
        group,
      });
    } else {
      res.json({ error: "Group not created" });
    }
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});
