import { Box } from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";
import SideBarMenu from "./SideBarMenu";
import UserAvatar from "./UserAvatar";

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
      className="bg-teal-600 p-4 flex flex-col"
    >
      <Logo />
      {/* SideDrawerMenu */}
      <SideBarMenu />
      {/*ProfileIcon  */}
      <UserAvatar />
    </Box>
  );
};

export default SideDrawer;
