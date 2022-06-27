import React from "react";
import { Box } from "@chakra-ui/react";
//
import Sidebar from "components/Sidebar";
import ChatMenu from "components/ChatMenu";

const Home = ({ user }) => {
  return (
    <Box display="flex">
      <Sidebar user={user} />
      {/* chat menu */}
      <ChatMenu user={user} />
    </Box>
  );
};

export default Home;
