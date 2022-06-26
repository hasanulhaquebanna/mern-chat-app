import { Box } from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";

const SideDrawer = () => {
  return (
    <Box
      width="80px"
      minHeight="100vh"
      position="fixed"
      left={0}
      top={0}
      height="100vh"
      overflow="hidden"
      className="bg-primaryYellow p-4 flex flex-col"
    >
      <Logo />
      {/* SideDrawerMenu */}
      {/*ProfileIcon  */}
    </Box>
  );
};

export default SideDrawer;
