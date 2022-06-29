import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";

const SelectedUserBadge = ({ handleUser, user }) => {
  return (
    <Box className="flex items-center justify-between h-3 text-ellipsis w-auto max-w-[160px] p-3.5 bg-teal-600 text-white rounded-[3px] m-1">
      <Text fontSize="10px" fontWeight="bold" padding="5px">
        {user?.name}
      </Text>
      <MdOutlineRemoveCircleOutline onClick={handleUser} />
    </Box>
  );
};

export default SelectedUserBadge;
