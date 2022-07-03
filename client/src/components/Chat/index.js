import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import io from "socket.io-client";

import { MessageBody } from "components";
import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";
import { ChatState } from "context/ChatContext";
import { toast } from "react-toastify";
import axios from "axios";
import classNames from "classnames";

// socket
let socket, selectedChatCompare;

const Chat = () => {
  let [socketStart, setSocketStart] = useState(false);
  let [messages, setMessages] = useState([]);
  let { selectedChat, user, selectChatInfo } = ChatState();
  let getMessages = async () => {
    if (!selectedChat) return;
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_SERVER}/api/messages/${selectedChat?._id}`,
        {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("userInfo"))?.token
            }`,
          },
        }
      );
      setMessages(data);
      socket.emit("join chat room", selectedChat?._id);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getMessages();
    selectedChatCompare = selectedChat;
  }, [selectedChat]);

  // socket

  useEffect(() => {
    socket = io(process.env.REACT_APP_SERVER);
    socket.emit("setup", user);
    socket.on("connection", () => {
      setSocketStart(true);
    });
  }, [selectedChat]);

  useEffect(() => {
    socket.on("message recived", (newMssageReceived) => {
      if (
        !selectedChatCompare ||
        selectedChatCompare._id !== newMssageReceived.id
      ) {
      } else {
        setMessages([...messages, newMssageReceived]);
      }
    });
  });
  return (
    <Box
      marginLeft="0px"
      background="rgba( 255, 255, 255, 0.22 )"
      boxShadow="inset 1px 0px 11px 0px #ababab"
      border="1px solid rgba( 255, 255, 255, 0.18 )"
      className={classNames(
        "w-[50%] h-screen ml-[5px] flex flex-col justify-between relative overflow-hidden",
        selectChatInfo && "w-[75%]"
      )}
      transition={selectChatInfo ? "all 0.5s ease-in-out" : "all 0.3s ease-out"}
    >
      <ChatHeader />
      <MessageBody setMessages={setMessages} messages={messages} />
      <ChatFooter setMessages={setMessages} />
    </Box>
  );
};

export default Chat;
