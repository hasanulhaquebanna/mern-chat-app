import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
//
import Sidebar from "components/Sidebar";
import ChatMenu from "components/ChatMenu";
import { ChatState } from "context/ChatContext";

const Home = () => {
  let { user } = ChatState();
  return (
    <Box display="flex">
      <Sidebar user={user} />
      {/* chat menu */}
      <ChatMenu user={user} />
    </Box>
  );
};

export default Home;
