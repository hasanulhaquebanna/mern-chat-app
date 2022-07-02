import React from "react";
import { Avatar, Box } from "@chakra-ui/react";

import {
  verifyLastMessage,
  verifySameSender,
  verifySameSenderMargin,
  verifySameUser,
} from "helpers";

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
      <span
        style={{
          backgroundColor: `${
            message.sender._id === user.id
              ? "rgb(5 150 105)"
              : "rgb(13 148 136)"
          }`,
          marginLeft: verifySameSenderMargin(messages, message, index, user.id),
          marginTop: verifySameUser(messages, message, index, user._id)
            ? 3
            : 10,
          borderRadius: "20px",
          padding: "5px 15px",
          maxWidth: "75%",
          color: "white",
        }}
      >
        {message?.message}
      </span>
    </Box>
  );
};

export default Message;
