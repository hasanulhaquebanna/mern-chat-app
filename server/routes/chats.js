const router = require("express").Router();
const passport = require("passport");

const userAuthorization = require("../middleware/userAuthorization");
const createChat = require("../controllers/chats/createChat");
const getAllChats = require("../controllers/chats/getAllChats");
const createGroup = require("../controllers/chats/createGroup");
const renameGroup = require("../controllers/chats/renameGroup");

router.post("/chats", userAuthorization, createChat);
router.get("/chats", userAuthorization, getAllChats);
router.post("/group/creategroup", userAuthorization, createGroup);
// router.post('/group/getgroups',getGroups)
// router.post('/group/remove',removeGroup)
router.put("/group/renamegroup", userAuthorization, renameGroup);
// router.post('/group/add',addingGroup)

module.exports = router;
