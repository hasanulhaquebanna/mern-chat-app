import React from "react";
import { ChatState } from "context/ChatContext";
import { getChatUser } from "helpers";
import { Box, Text } from "@chakra-ui/react";

const ChatName = () => {
  let { user, selectedChat } = ChatState();
  return (
    <Box>
      {selectedChat?.isGroup && (
        <Text textShadow="5px 5px 11px rgba(175, 191, 188, 1)">
          {selectedChat?.chatName}
        </Text>
      )}
      {selectedChat?.isGroup === false && (
        <Text textShadow="5px 5px 11px rgba(175, 191, 188, 1)">
          {getChatUser(user, selectedChat?.users)?.name}
        </Text>
      )}
    </Box>
  );
};

export default ChatName;
