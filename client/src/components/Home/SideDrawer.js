import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
} from "@chakra-ui/react";

const SideDrawer = ({ isOpen, onClose, btnRef }) => {
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
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SideDrawer;
