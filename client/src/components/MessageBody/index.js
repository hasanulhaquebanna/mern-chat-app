import { Box } from "@chakra-ui/react";
import React from "react";
import ScrollableMessageBody from "./ScrollableMessageBody";

const MessageBody = ({ messages }) => {
  return (
    <Box className="overflow-y-auto h-full overflow-x-hidden mt-[70px] mb-[60px] bg-[#ace1d8] p-4 flex flex-col relative">
      <ScrollableMessageBody messages={messages} />
    </Box>
  );
};

export default MessageBody;
