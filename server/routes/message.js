const router = require("express").Router();

const createMessage = require("../controllers/message/createMessage");
const userAuthorization = require("../middleware/userAuthorization");

router.post("/messages", userAuthorization, createMessage);

module.exports = router;
