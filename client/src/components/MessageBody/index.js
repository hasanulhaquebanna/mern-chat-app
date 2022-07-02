import { Box } from "@chakra-ui/react";
import axios from "axios";
import { ChatState } from "context/ChatContext";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ScrollableMessageBody from "./ScrollableMessageBody";

const MessageBody = () => {
  let [latestMessages, setLatestMessages] = useState([]);

  let { selectedChat } = ChatState();
  let getMessages = async () => {
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
      data && setLatestMessages([...latestMessages, data]);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    // console.log(selectedChat);
    getMessages();
  }, [selectedChat]);
  return (
    <Box className="overflow-y-auto h-full overflow-x-hidden mt-[70px] mb-[60px] bg-[#ace1d8] p-4 flex flex-col relative">
      <ScrollableMessageBody messages={latestMessages} />
    </Box>
  );
};

export default MessageBody;
