import { Box } from "@chakra-ui/react";
import React from "react";
import Sidebar from "components/Sidebar";
import ChatMenu from "components/ChatMenu";

const Home = () => {
  return (
    <Box display="flex">
      <Sidebar />
      {/* chat menu */}
      <ChatMenu />
    </Box>
  );
};

export default Home;
