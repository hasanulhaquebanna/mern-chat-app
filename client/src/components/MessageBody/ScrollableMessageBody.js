import * as React from "react";
import ScrollableFeed from "react-scrollable-feed";

import { ChatState } from "context/ChatContext";
import Message from "./Message";

const ScrollableMessageBody = ({ messages }) => {
  let { user } = ChatState();
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
