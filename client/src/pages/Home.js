import { Box } from "@chakra-ui/react";
import { SideDrawer } from "components";
import { ChatState } from "context/ChatContext";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const { user } = ChatState();
  //
  return (
    <Box>
      {/* sidebar drawer */}
      <SideDrawer />
    </Box>
  );
};

export default Home;
