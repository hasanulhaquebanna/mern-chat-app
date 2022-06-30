import React from "react";
import { ChatState } from "context/ChatContext";
import { getChatUser } from "helpers";
import { Box, Text } from "@chakra-ui/react";

const ChatName = () => {
  let { user, selectedChat } = ChatState();
  return (
    <Box>
      {selectedChat?.isGroup ? (
        <Text>{selectedChat?.chatName}</Text>
      ) : (
        <Text>{getChatUser(user, selectedChat.users)?.name}</Text>
      )}
    </Box>
  );
};

export default ChatName;
