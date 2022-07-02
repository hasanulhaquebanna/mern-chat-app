import { ChatState } from "context/ChatContext";
import React from "react";

import ScrollableFeed from "react-scrollable-feed-virtualized";
import Message from "./Message";

const ScrollableMessageBody = ({ messages }) => {
  let { user } = ChatState();
  console.log(messages);
  return (
    <ScrollableFeed>
      {messages?.map((message, index) => (
        <Message
          messages={messages}
          message={message}
          key={index}
          index={index}
          user={user}
        />
      ))}
    </ScrollableFeed>
  );
};

export default ScrollableMessageBody;
