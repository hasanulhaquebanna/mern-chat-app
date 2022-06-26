import { Box, Text } from "@chakra-ui/react";
import React from "react";
import MenuCard from "./MenuCard";

const Favourite = () => {
  return (
    <Box className="pt-8">
      <Text
        textDecoration="underline"
        fontSize="18px"
        paddingLeft="5px"
        marginBottom="5px"
        className="text-primaryYellow"
      >
        #Favourites
      </Text>
      <MenuCard />
    </Box>
  );
};

export default Favourite;
