import React from "react";
import { Avatar, Box, Text } from "@chakra-ui/react";
import classNames from "classnames";
import { getChatUser } from "./getChatUser";

const RecentChatCard = ({ item, groupModal, handleChat, loggedUser }) => {
  return (
    <Box
      _hover={{ background: "#059669", color: "white" }}
      boxShadow="-5px 5px 50px 0 rgb(115 119 179 / 37%)"
      backdropFilter="blur( 8px )"
      border="1px solid rgba( 255, 255, 255, 0.18 )"
      width="100%"
      borderRadius="3px"
      cursor="pointer"
      marginBottom="5px"
      className={classNames(
        "flex items-center text-lg py-2.5 px-[18px]"
        // groupModal && "!rounded-[8px]"
      )}
      onClick={handleChat}
    >
      {!item.isGroup ? (
        <>
          <Avatar
            width="30px"
            height="30px"
            name={getChatUser(loggedUser, item.users)?.name}
            src={getChatUser(loggedUser, item.users)?.picture}
            className="mr-[18px]"
          />
          <Text className="text-base font-normal">
            {getChatUser(loggedUser, item.users)?.name}
          </Text>
        </>
      ) : (
        <Text className="text-base font-normal">{item?.chatName}</Text>
      )}
    </Box>
  );
};

export default RecentChatCard;
