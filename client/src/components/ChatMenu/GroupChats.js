import React from "react";
import classNames from "classnames";
import { Box, Text } from "@chakra-ui/react";

import { ChatState } from "context/ChatContext";
import { GroupChatCard } from "libs";

const RecentChats = ({ chats, loggedUser }) => {
  let { selectedChat, setSelectedChat } = ChatState();
  let startChat = (userId) => {
    setSelectedChat(userId);
  };

  return (
    <Box className={classNames("pt-8", chats && "mt-8")}>
      <Text
        textDecoration="underline"
        fontSize="18px"
        paddingLeft="5px"
        marginBottom="5px"
        className="text-primaryYellow"
      >
        #Groups
      </Text>
      <Box className="flex flex-col min-h-[200px] overflow-hidden max-h-[500px]">
        {chats
          .filter((c) => c.isGroup === true)
          ?.map((data, index) => (
            <GroupChatCard
              key={index}
              item={data}
              loggedUser={loggedUser}
              selectedChat={selectedChat}
              handleChat={() => startChat(data)}
            />
          ))}
      </Box>
    </Box>
  );
};

export default RecentChats;
