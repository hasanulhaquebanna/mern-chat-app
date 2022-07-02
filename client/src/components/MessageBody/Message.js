import React from "react";
import { Avatar, Box } from "@chakra-ui/react";

import { verifyLastMessage, verifySameSender } from "helpers";

const Message = ({ message, index, messages, user }) => {
  return (
    <Box display="flex">
      {(verifySameSender(messages, message, index, user?.id) ||
        verifyLastMessage(messages, index, user.id)) && (
        <Avatar
          size="sm"
          name={message?.sender?.name}
          src={message?.sender?.picture}
        />
      )}
    </Box>
  );
};

export default Message;
