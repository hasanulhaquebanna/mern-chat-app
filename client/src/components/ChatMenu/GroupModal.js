import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import axios from "axios";
import SelectedUsers from "./SelectedUsers";

const GroupModal = ({ isOpen, onClose, user, loggedUser }) => {
  let [loading, setLoading] = useState(false);
  let [results, setResults] = useState([]);
  let [selectedUsers, setSelectedUsers] = useState([]);
  let [search, setSearch] = useState("");
  let clear = () => {
    setResults([]);
    setSearch("");
  };
  let handleSearchUser = async (e) => {
    setSearch(e.target.value);
    setLoading(true);
    if (!search) {
      setLoading(false);
      return false;
    }
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_SERVER}user/searchusers?search=${search}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setTimeout(() => {
        data && setLoading(false);
      }, [1000]);
      data && setResults(data);
    } catch (error) {
      setLoading(false);
      toast.error(error.message, {
        position: "bottom-right",
      });
    }
  };
  let handleSelectUsers = (user) => {
    if (selectedUsers.includes(user)) {
      toast.info("User already selected", {
        position: "bottom-right",
      });
      return;
    }
    setSelectedUsers([...selectedUsers, user]);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create a group chat</ModalHeader>
        <ModalCloseButton onClick={clear} />
        <ModalBody paddingBottom="40px">
          <SelectedUsers
            search={search}
            handleSearchUser={handleSearchUser}
            loading={loading}
            handleSelectUsers={handleSelectUsers}
            results={results}
            selectedUsers={selectedUsers}
          />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue">next</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default GroupModal;
