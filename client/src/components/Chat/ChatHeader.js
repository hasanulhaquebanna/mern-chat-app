import { Box } from "@chakra-ui/react";
import React from "react";
import ChatAvatar from "./ChatAvatar";
import ChatName from "./ChatName";
import ChatSetting from "./ChatSetting";

const ChatHeader = () => {
  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      width="100%"
      height="70px"
      background="rgba( 255, 255, 255, 0.22 )"
      boxShadow="0px -4px 20px 0 rgb(82 82 92 / 37%)"
      backdropFilter="blur( 8px )"
      border="1px solid rgba( 255, 255, 255, 0.18 )"
      overflow="hidden"
    >
      <Box className="flex justify-between items-center p-5">
        <ChatName />
        <ChatAvatar />
        <ChatSetting />
      </Box>
    </Box>
  );
};

export default ChatHeader;
