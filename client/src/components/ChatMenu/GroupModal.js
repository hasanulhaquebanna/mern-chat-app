import React from "react";
import {
  Box,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import UserMenuCard from "helpers/UserMenuCard";

const GroupModal = ({ isOpen, onClose, user = true }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create a group or chat</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input placeholder="Search user" />
          {user && (
            <Box marginY="10px">
              <UserMenuCard groupModal={true} />
            </Box>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default GroupModal;
