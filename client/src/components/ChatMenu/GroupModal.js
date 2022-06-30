import React, { useState } from "react";
import {
  Button,
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
import GroupName from "./GroupName";
import { ChatState } from "context/ChatContext";

const GroupModal = ({ isOpen, onClose, user, loggedUser }) => {
  let { myChats, setMyChats } = ChatState();
  let [loading, setLoading] = useState(false);
  let [results, setResults] = useState([]);
  let [selectedUsers, setSelectedUsers] = useState([]);
  let [selectGroup, setSelectGroup] = useState(false);
  let [groupName, setGroupName] = useState("");
  let [search, setSearch] = useState("");
  let clear = () => {
    setResults([]);
    setSelectGroup(false);
    setSearch("");
    setSelectedUsers([]);
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
            Authorization: `Bearer ${user?.token}`,
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
      toast.error("User already selected", {
        position: "bottom-right",
        autoClose: 500,
      });
      return;
    }
    setSelectedUsers([...selectedUsers, user]);
  };
  let createGroup = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER}group/creategroup`,
        {
          name: groupName,
          users: JSON.stringify(selectedUsers.map((user) => user._id)),
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      data && setLoading(false);
      data && setMyChats([data, ...myChats]);
      data && onClose();
      data &&
        toast.success(data.message || data.error, {
          position: "bottom-right",
          autoClose: 500,
        });
      clear();
    } catch (error) {
      setLoading(false);
      toast.error(error.message, {
        position: "bottom-right",
        autoClose: 1000,
      });
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create a group chat</ModalHeader>
        <ModalCloseButton onClick={clear} />
        <ModalBody paddingBottom="40px">
          {!selectGroup ? (
            <SelectedUsers
              search={search}
              handleSearchUser={handleSearchUser}
              loading={loading}
              handleSelectUsers={handleSelectUsers}
              results={results}
              setSelectedUsers={setSelectedUsers}
              selectedUsers={selectedUsers}
            />
          ) : (
            <GroupName setGroupName={setGroupName} groupName={groupName} />
          )}
        </ModalBody>
        <ModalFooter>
          {!selectGroup ? (
            <Button
              colorScheme="blue"
              disabled={selectedUsers.length < 3}
              onClick={() => setSelectGroup(true)}
            >
              next
            </Button>
          ) : (
            <Button
              isLoading={loading}
              colorScheme="blue"
              disabled={groupName.length < 4}
              onClick={createGroup}
            >
              Create group
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default GroupModal;
