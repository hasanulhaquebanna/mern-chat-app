import React from "react";
import { Box } from "@chakra-ui/react";
//

import { Chat, Sidebar, ChatMenu, UserInfo } from "components";

const Home = ({ user }) => {
  return (
    <Box
      background="teal.100"
      className="flex w-screen max-w-[1920px] mx-auto relative"
    >
      <Sidebar user={user} />
      {/* chat menu */}
      <ChatMenu user={user} />
      <Chat />
      <UserInfo />
    </Box>
  );
};

export default Home;
