const router = require("express").Router();
const passport = require("passport");

const userAuthorization = require("../middleware/userAuthorization");
const createChat = require("../controllers/chats/createChat");
const getAllChats = require("../controllers/chats/getAllChats");
const createGroup = require("../controllers/chats/createGroup");
const renameGroup = require("../controllers/chats/renameGroup");
const addToGroup = require("../controllers/chats/addToGroup");
const removeFromGroup = require("../controllers/chats/removeFromGroup");

router.post("/chats", userAuthorization, createChat);
router.get("/chats", userAuthorization, getAllChats);
router.post("/group/creategroup", userAuthorization, createGroup);
router.put("/group/renamegroup", userAuthorization, renameGroup);
router.put("/group/addtogroup", userAuthorization, addToGroup);
router.post("/group/removefromgroup", userAuthorization, removeFromGroup);

module.exports = router;
