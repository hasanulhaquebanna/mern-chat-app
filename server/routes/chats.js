const router = require("express").Router();
const passport = require("passport");

const userAuthorization = require("../middleware/userAuthorization");
const createChat = require("../controllers/chats/createChat");

router.post("/chats", userAuthorization, createChat);
// router.post('/chats',getChat)
// router.post('/group/creategroup',createGroup)
// router.post('/group/getgroups',getGroups)
// router.post('/group/remove',removeGroup)
// router.post('/group/rename',renameGroup)
// router.post('/group/add',addingGroup)

module.exports = router;
