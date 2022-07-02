import React from "react";
import { Avatar, Box, Tooltip } from "@chakra-ui/react";

import { verifyLastMessage, verifySameSender } from "helpers";

const Message = ({ message, index, messages, user }) => {
  console.log(message);
  return (
    <Box display="flex">
      {(verifySameSender(messages, message, index, user?.id) ||
        verifyLastMessage(messages, index, user?.id)) && (
        <Tooltip
          label={message?.sender?.name}
          placement="bottom-strat"
          hasArrow
        >
          <Avatar
            size="sm"
            name={message?.sender?.name}
            src={message?.sender?.picture}
          />
        </Tooltip>
      )}
    </Box>
  );
};

export default Message;
