import { Box, Text } from "@chakra-ui/react";
import React from "react";
import UserMenuCard from "helpers/UserMenuCard";

const RecentChats = ({ favourites, chats }) => {
  return (
    <Box className="pt-8">
      {favourites && (
        <Text
          textDecoration="underline"
          fontSize="18px"
          paddingLeft="5px"
          marginBottom="5px"
          className="text-primaryYellow"
        >
          #Recents
        </Text>
      )}
      <Box className="flex flex-col min-h-[200px] overflow-hidden max-h-[500px]">
        {chats?.map((data, index) => (
          <UserMenuCard />
        ))}
      </Box>
    </Box>
  );
};

export default RecentChats;