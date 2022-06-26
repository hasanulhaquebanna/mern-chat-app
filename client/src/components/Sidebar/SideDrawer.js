import React from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
} from "@chakra-ui/react";

import UserMenuCard from "helpers/UserMenuCard";

const SideDrawer = ({ isOpen, onClose, btnRef, user = true }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Search</DrawerHeader>
        <DrawerBody>
          <Input placeholder="Type here..." />
          {user && (
            <Box marginY="10px">
              <UserMenuCard groupModal={true} />
            </Box>
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SideDrawer;
