import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import io from "socket.io-client";

import { MessageBody } from "components";
import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";
import { ChatState } from "context/ChatContext";
import { toast } from "react-toastify";
import axios from "axios";

// socket
let socket, selectedChatCompare;
const SERVER_END = "http://localhost:8000";

const Chat = () => {
  let [messages, setMessages] = useState([]);
  let { selectedChat } = ChatState();
  let getMessages = async () => {
    if (!selectedChat) return;
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_SERVER}messages/${selectedChat?._id}`,
        {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("userInfo"))?.token
            }`,
          },
        }
      );
      setMessages(data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    socket = io(SERVER_END);
  }, [selectedChat]);

  useEffect(() => {
    getMessages();
  }, [selectedChat]);
  return (
    <Box
      marginLeft="0px"
      background="rgba( 255, 255, 255, 0.22 )"
      boxShadow="inset 1px 0px 11px 0px #ababab"
      border="1px solid rgba( 255, 255, 255, 0.18 )"
      className=" w-[50%] h-screen ml-[5px] flex flex-col justify-between relative overflow-hidden"
    >
      <ChatHeader />
      <MessageBody setMessages={setMessages} messages={messages} />
      <ChatFooter setMessages={setMessages} />
    </Box>
  );
};

export default Chat;
