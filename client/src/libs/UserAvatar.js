import React, { useState } from "react";
import { Avatar, Box, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import classNames from "classnames";

const UserAvatar = ({ className, user }) => {
  let history = useHistory();
  let [logout, setLogOut] = useState(false);
  let handleLogOut = () => {
    localStorage.removeItem("userInfo");
    history.push("/login");
  };

  return (
    <Box
      className={classNames(
        "flex items-center justify-center cursor-pointer",
        className
      )}
      onClick={() => setLogOut((prev) => !prev)}
    >
      <Avatar
        width="30px"
        height="30px"
        name={user?.name}
        src={user?.picture}
      />
      {logout && (
        <Box
          className="absolute right-2.5 bottom-0 text-white z-1 bg-teal-700 w-16 p-1.5 rounded-[3px]"
          onClick={handleLogOut}
        >
          <Text>Logout</Text>
        </Box>
      )}
    </Box>
  );
};

export default UserAvatar;
