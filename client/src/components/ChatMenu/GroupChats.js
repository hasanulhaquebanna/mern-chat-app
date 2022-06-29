import { Box, Text } from "@chakra-ui/react";
import classNames from "classnames";
import React from "react";
import GroupMenuCard from "../../helpers/GroupMenuCard";

const Groups = ({ recentChats, chats }) => {
  return (
    <Box
      className={classNames(
        "pt-8 overflow-hidden",
        recentChats && "max-h-[292px] "
      )}
    >
      <Text
        textDecoration="underline"
        fontSize="18px"
        paddingLeft="5px"
        marginBottom="5px"
        className="text-primaryYellow"
      >
        #Groups
      </Text>
      <Box className="flex flex-col min-h-[200px] overflow-y-auto  max-h-[500px]">
        {chats?.map((data, index) => (
          <GroupMenuCard />
        ))}
      </Box>
    </Box>
  );
};

export default Groups;
