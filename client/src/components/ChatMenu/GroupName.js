import { Box, Input, Text } from "@chakra-ui/react";
import React from "react";

const GroupName = ({ groupName, setGroupName }) => {
  return (
    <Box className="w-full flex flex-col">
      <Text
        fontSize="18px"
        paddingLeft="5px"
        marginBottom="5px"
        className="text-primaryGray"
      >
        Enter group name
      </Text>
      <Input
        placeholder="Enter name..."
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
      />
    </Box>
  );
};

export default GroupName;
