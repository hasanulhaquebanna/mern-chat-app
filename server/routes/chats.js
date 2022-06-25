const router = require("express").Router();
const passport = require("passport");

const userAuthorization = require("../middleware/userAuthorization");
const createChat = require("../controllers/chats/createChat");
const getAllChats = require("../controllers/chats/getAllChats");

router.post("/chats", userAuthorization, createChat);
router.get("/chats", userAuthorization, getAllChats);
// router.post('/group/creategroup',createGroup)
// router.post('/group/getgroups',getGroups)
// router.post('/group/remove',removeGroup)
// router.post('/group/rename',renameGroup)
// router.post('/group/add',addingGroup)

module.exports = router;
