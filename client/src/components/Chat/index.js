import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";

import { ChatState } from "context/ChatContext";
import ChatHeader from "./ChatHeader";

const Chat = () => {
  let { selectedChat } = ChatState();
  useEffect(() => {
    // console.log(selectedChat);
  }, [selectedChat]);
  return (
    <Box
      marginLeft="0px"
      background="rgba( 255, 255, 255, 0.22 )"
      boxShadow="-5px 5px 50px 0 rgb(82 82 92 / 37%)"
      backdropFilter="blur( 8px )"
      border="1px solid rgba( 255, 255, 255, 0.18 )"
      className=" w-[50%] h-screen ml-[5px] "
    >
      <ChatHeader />
    </Box>
  );
};

export default Chat;
