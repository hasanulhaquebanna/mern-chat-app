import React from "react";
import { Avatar, Box, Text } from "@chakra-ui/react";
import classNames from "classnames";

const MenuCard = ({ user, groupModal }) => {
  return (
    <Box
      _hover={{ background: "rgba( 255, 255, 255, 0.3 )" }}
      boxShadow="-5px 5px 50px 0 rgb(115 119 179 / 37%)"
      backdropFilter="blur( 8px )"
      border="1px solid rgba( 255, 255, 255, 0.18 )"
      width="100%"
      borderRadius="3px"
      cursor="pointer"
      marginBottom="5px"
      className={classNames(
        "flex items-center text-lg py-2.5 px-[18px]",
        groupModal && "!rounded-[8px]"
      )}
    >
      <Avatar
        width="30px"
        height="30px"
        name={user?.name}
        src={user?.picture}
        className="mr-[18px]"
      />
      <Text className="text-base font-normal">{user?.name}</Text>
    </Box>
  );
};

export default MenuCard;
