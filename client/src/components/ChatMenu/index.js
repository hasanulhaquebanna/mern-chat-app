import React, { useEffect, useState } from "react";
import { Box, IconButton, Text, useDisclosure } from "@chakra-ui/react";
import { GrAddCircle } from "react-icons/gr";
import RecentChats from "./RecentChats";
import GroupModal from "./GroupModal";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { ChatState } from "context/ChatContext";

const ChatMenu = ({ user }) => {
  console.log(user);
  let history = useHistory();
  let { isOpen, onOpen, onClose } = useDisclosure();
  let [recentChats, setRecentChats] = useState([]);
  let [favourites, setFavourites] = useState([]);

  useEffect(() => {
    setTimeout(async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_SERVER}/chats`,
          {
            headers: {
              Authorization: `Bearer ${
                JSON.parse(localStorage.getItem("userInfo")).token
              }`,
            },
          }
        );
        data && setRecentChats(data);
        console.log(data);
      } catch (error) {
        toast.error(error.message, {
          autoClose: 1500,
        });
      }
    }, 2000);
  }, []);

  return (
    <Box
      marginLeft="80px"
      background="rgba( 255, 255, 255, 0.22 )"
      boxShadow="-5px 5px 50px 0 rgb(82 82 92 / 37%)"
      backdropFilter="blur( 8px )"
      border="1px solid rgba( 255, 255, 255, 0.18 )"
      className=" w-[20%] h-screen"
      minHeight="100vh"
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
        <GroupModal isOpen={isOpen} onClose={onClose} user={user} />
        {recentChats && (
          <RecentChats chats={recentChats} favourites={favourites} />
        )}
      </Box>
    </Box>
  );
};

export default ChatMenu;
