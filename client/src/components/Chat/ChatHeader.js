import { Box, Text } from "@chakra-ui/react";
import React from "react";
import ChatName from "./ChatName";

const ChatHeader = () => {
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
      <ChatName />
    </Box>
  );
};

export default ChatHeader;
