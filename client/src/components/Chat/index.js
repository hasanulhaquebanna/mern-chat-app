import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";

import { ChatState } from "context/ChatContext";
import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";

const Chat = () => {
  let { selectedChat } = ChatState();
  useEffect(() => {}, [selectedChat]);
  return (
    <Box
      marginLeft="0px"
      background="rgba( 255, 255, 255, 0.22 )"
      boxShadow="inset 1px 0px 11px 0px #ababab"
      border="1px solid rgba( 255, 255, 255, 0.18 )"
      className=" w-[50%] h-screen ml-[5px] flex flex-col justify-between relative overflow-hidden"
    >
      <ChatHeader />
      <ChatFooter />
    </Box>
  );
};

export default Chat;
