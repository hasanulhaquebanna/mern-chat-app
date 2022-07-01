import React from "react";

import UserAvatar from "libs/UserAvatar";
import { getGroupUsers } from "helpers";
import { ChatState } from "context/ChatContext";
import { Box } from "@chakra-ui/react";

const ChatAvatar = () => {
  let { user, selectedChat } = ChatState();
  return (
    <Box className="flex items-center  jusitfy-between gap-4">
      {selectedChat?.isGroup &&
        getGroupUsers(user, selectedChat?.users)?.map((user, index) => (
          <UserAvatar key={index} user={user} className="-m-4" />
        ))}
    </Box>
  );
};

export default ChatAvatar;
