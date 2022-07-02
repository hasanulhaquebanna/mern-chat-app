import React, { useState } from "react";
import { Box, Button, FormControl, Input } from "@chakra-ui/react";
import { IoMdSend } from "react-icons/io";
import { toast } from "react-toastify";
import { ChatState } from "context/ChatContext";
import axios from "axios";

const ChatFooter = ({ messages, setMessages }) => {
  let { user, selectedChat } = ChatState();
  let [message, setMessage] = useState("");

  let handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setMessage("");
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER}messages`,
        {
          message,
          chatId: selectedChat?._id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );
      setMessages([...messages, data]);
      console.log(data);
    } catch (error) {
      // toast.error(error.message);
    }
  };
  let handleMessageForm = (e) => {
    if (e.key === "Enter" && message) {
      handleFormSubmit(e);
    }
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <FormControl
        onKeyDown={handleMessageForm}
        isRequired
        className="flex items-center justify-between !absolute w-full h-14 overflow-hidden bottom-0 right-0 p-2 gap-2"
      >
        <Box className="overflow-hidden w-[90%] relative">
          <Input
            placeholder="Type message..."
            outline="none"
            _hover={{
              borderTop: "none",
              borderRight: "none",
              borderLeft: "none",
            }}
            borderTop="none"
            borderLeft="none"
            borderRight="none"
            _focus={{ border: "1px solid #0d9488" }}
            className="!border !border-b-teal-600 !rounded-none focus:!rounded-md absolute w-full h-full"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Box>
        <Button
          type="submit"
          className="overflow-hidden w-[10%] !bg-teal-600 !text-white"
        >
          <IoMdSend />
        </Button>
      </FormControl>
    </form>
  );
};

export default ChatFooter;
