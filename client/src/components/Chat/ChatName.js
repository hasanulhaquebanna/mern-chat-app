import React from "react";
import { ChatState } from "context/ChatContext";
import { getChatUser, getGroupUsers } from "helpers";
import { Box, Text } from "@chakra-ui/react";
import UserAvatar from "libs/UserAvatar";

const ChatName = () => {
  let { user, selectedChat } = ChatState();
  return (
    <Box>
      {selectedChat?.isGroup && (
        <Box>
          <Text>{selectedChat?.chatName}</Text>
          {getGroupUsers(user, selectedChat?.users)?.map((user, index) => (
            <UserAvatar key={index} user={user} />
          ))}
        </Box>
      )}
      {selectedChat?.isGroup === false && (
        <Box>
          <Text>{getChatUser(user, selectedChat?.users)?.name}</Text>
        </Box>
      )}
    </Box>
  );
};

export default ChatName;
