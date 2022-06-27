import { Box } from "@chakra-ui/react";
import { ChatState } from "context/ChatContext";
import React from "react";

const Chat = () => {
  let { chats, setChats } = ChatState();
  return <Box>HELLOW WORLD </Box>;
};

export default Chat;
