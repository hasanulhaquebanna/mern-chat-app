import { Box } from "@chakra-ui/react";
import axios from "axios";
import { ChatState } from "context/ChatContext";
import React, { useEffect } from "react";

const MessageBody = ({ messages, setMessages }) => {
  let { selectedChat } = ChatState();
  let getMessages = async () => {
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
    data && setMessages([...messages, data]);
    console.log(data);
  };

  useEffect(() => {
    // console.log(selectedChat);
    getMessages();
  }, [selectedChat]);
  return (
    <Box className="overflow-y-auto h-full overflow-x-hidden mt-[70px] mb-[60px] bg-[#ace1d8] p-4">
      {/* {messages.map((message, index) => [console.log(message?.message)])} */}
    </Box>
  );
};

export default MessageBody;
