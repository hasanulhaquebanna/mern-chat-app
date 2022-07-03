import React from "react";
import { Box } from "@chakra-ui/react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { ChatState } from "context/ChatContext";

const ChatSetting = () => {
  let { setSelectChatInfo } = ChatState();
  return (
    <Box className="flex items-center justify-between gap-4">
      <BsFillInfoCircleFill className="text-lg text-gray-500 cursor-pointer" />
      <IoSettingsSharp className="text-lg text-gray-500 cursor-pointer" />
      <BiDotsVerticalRounded
        className="text-xl text-gray-500 cursor-pointer -ml-2"
        onClick={() => setSelectChatInfo((prev) => !prev)}
      />
    </Box>
  );
};

export default ChatSetting;
