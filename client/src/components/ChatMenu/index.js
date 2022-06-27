import React from "react";
import { Box, IconButton, Text, useDisclosure } from "@chakra-ui/react";
import { GrAddCircle } from "react-icons/gr";
import Favourite from "./Favourite";
import RecentChats from "./RecentChats";
import GroupModal from "./GroupModal";

const ChatMenu = ({ user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const favourites = [
    {
      id: 1,
      user: "Banna",
    },

    {
      id: 2,
      user: "Banna",
    },
    {
      id: 3,
      user: "Banna",
    },
    {
      id: 1,
      user: "Banna",
    },

    {
      id: 2,
      user: "Banna",
    },
    {
      id: 3,
      user: "Banna",
    },
    {
      id: 1,
      user: "Banna",
    },

    {
      id: 2,
      user: "Banna",
    },
    {
      id: 3,
      user: "Banna",
    },
  ];
  const recentChats = [
    {
      id: 1,
      user: "Banna",
    },

    {
      id: 2,
      user: "Banna",
    },
    {
      id: 3,
      user: "Banna",
    },
    {
      id: 1,
      user: "Banna",
    },

    {
      id: 2,
      user: "Banna",
    },
    {
      id: 3,
      user: "Banna",
    },
    {
      id: 1,
      user: "Banna",
    },

    {
      id: 2,
      user: "Banna",
    },
    {
      id: 3,
      user: "Banna",
    },
  ];
  return (
    <Box
      marginLeft="80px"
      background="rgba( 255, 255, 255, 0.22 )"
      boxShadow="-5px 5px 50px 0 rgb(82 82 92 / 37%)"
      backdropFilter="blur( 8px )"
      border="1px solid rgba( 255, 255, 255, 0.18 )"
      className=" w-[320px] h-screen"
    >
      <Box display="flex" flexDirection="column" className="relative">
        <Text
          textShadow="2px -2px 4px #ffc801"
          className="text-[cadetblue] text-center font-bold text-3xl"
        >
          Recent Chats
        </Text>
        <IconButton
          position="absolute"
          borderRadius="50%"
          right="0"
          top="50px"
          background="rgba( 255, 255, 255, 0.22 )"
          boxShadow="-5px 5px 50px 0 rgb(82 82 92 / 37%)"
          backdropFilter="blur( 8px )"
          border="1px solid rgba( 255, 255, 255, 0.18 )"
          aria-label="Add to group"
          icon={<GrAddCircle />}
          onClick={onOpen}
        />
        <GroupModal isOpen={isOpen} onClose={onClose} />
        {favourites && (
          <Favourite chats={favourites} recentChats={recentChats} />
        )}
        {recentChats && (
          <RecentChats chats={recentChats} favourites={favourites} />
        )}
      </Box>
    </Box>
  );
};

export default ChatMenu;
