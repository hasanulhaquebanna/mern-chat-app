import React from "react";
import { Box } from "@chakra-ui/react";
//

import { Chat, Sidebar, ChatMenu } from "components";

const Home = ({ user }) => {
  return (
    <Box display="flex">
      <Sidebar user={user} />
      {/* chat menu */}
      <ChatMenu user={user} />
      <Chat />
    </Box>
  );
};

export default Home;
