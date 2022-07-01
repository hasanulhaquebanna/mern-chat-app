import React from "react";
import { Box, Button, FormControl, Input } from "@chakra-ui/react";
import { IoMdSend } from "react-icons/io";

const ChatFooter = () => {
  return (
    <FormControl className="flex items-center justify-between !absolute w-full h-14 overflow-hidden bottom-0 right-0 p-2 gap-2">
      <Box className="overflow-hidden w-[90%]">
        <Input
          placeholder="Type message..."
          outline="none"
          _hover={{
            borderTop: "none",
            borderRight: "none",
            borderLeft: "none",
          }}
          borderTop="none"
          borderLeft="none"
          borderRight="none"
          _focus={{ border: "1px solid #0d9488" }}
          className="!border !border-b-teal-600 !rounded-none focus:!rounded-md"
        />
      </Box>
      <Button className="overflow-hidden w-[10%] !bg-teal-600 !text-white">
        <IoMdSend />
      </Button>
    </FormControl>
  );
};

export default ChatFooter;
