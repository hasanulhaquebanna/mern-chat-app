import { Box } from "@chakra-ui/react";
import { ChatState } from "context/ChatContext";
import React, { useEffect } from "react";

const MessageBody = () => {
  let { selectedChat } = ChatState();
  useEffect(() => {
    // console.log(selectedChat);
  }, [selectedChat]);
  return (
    <Box className="overflow-y-auto h-full overflow-x-hidden mt-[70px] mb-[60px] bg-black">
      MessageBody
    </Box>
  );
};

export default MessageBody;
