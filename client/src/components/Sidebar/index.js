import React from "react";
import { Box } from "@chakra-ui/react";

import Logo from "./Logo";
import SideBarMenu from "./SideBarMenu";
import UserAvatar from "libs/UserAvatar";

const Sidebar = ({ user }) => {
  return (
    <Box
      width="80px"
      minHeight="100vh"
      position="absolute"
      left={0}
      top={0}
      height="100vh"
      overflow="hidden"
      className="flex flex-col p-4 bg-teal-600"
    >
      <Logo />
      <SideBarMenu user={user} />
      <UserAvatar user={user} />
    </Box>
  );
};

export default Sidebar;
