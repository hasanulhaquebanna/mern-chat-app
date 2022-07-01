const router = require("express").Router();

const createMessage = require("../controllers/message/createMessage");
const getMessages = require("../controllers/message/getMessages");
const userAuthorization = require("../middleware/userAuthorization");

router.post("/messages", userAuthorization, createMessage);
router.get("/messages/:userId", userAuthorization, getMessages);

module.exports = router;
