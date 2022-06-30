import { Box, Text } from "@chakra-ui/react";
import { ChatState } from "context/ChatContext";
import { getChatUser } from "helpers";
import React from "react";

const ChatHeader = () => {
  let { user, selectedChat } = ChatState();
  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      width="100%"
      height="70px"
      background="rgba( 255, 255, 255, 0.22 )"
      boxShadow="-5px 5px 50px 0 rgb(82 82 92 / 37%)"
      backdropFilter="blur( 8px )"
      border="1px solid rgba( 255, 255, 255, 0.18 )"
    >
      {selectedChat?.isGroup ? (
        <Text>{selectedChat?.chatName}</Text>
      ) : (
        <Text>{getChatUser(user, selectedChat.users)?.name}</Text>
      )}
    </Box>
  );
};

export default ChatHeader;
