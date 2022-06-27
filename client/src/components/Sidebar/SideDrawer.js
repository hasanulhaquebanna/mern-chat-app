import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
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
          <Box position="relative" display="flex" gap="5px">
            <Input placeholder="Type here..." />

            <IconButton aria-label="Search user" icon={<BiSearchAlt />} />
          </Box>
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
