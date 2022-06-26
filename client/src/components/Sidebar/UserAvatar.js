import React, { useEffect, useState } from "react";
import { Avatar, Box } from "@chakra-ui/react";

const UserAvatar = ({ user }) => {
  return (
    <Box className="flex items-center justify-center cursor-pointer">
      <Avatar
        width="30px"
        height="30px"
        name={user?.name}
        src={user?.picture}
      />
    </Box>
  );
};

export default UserAvatar;
