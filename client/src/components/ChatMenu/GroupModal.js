import React, { useState } from "react";
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
import ModalLoading from "helpers/ModalLoading";
import { toast } from "react-toastify";
import axios from "axios";

const GroupModal = ({ isOpen, onClose, user }) => {
  let [loading, setLoading] = useState(false);
  let [results, setResults] = useState([]);
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
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create a group or chat</ModalHeader>
        <ModalCloseButton onClick={clear} />
        <ModalBody paddingBottom="40px">
          <Input
            placeholder="Search user"
            value={search}
            onChange={(e) => handleSearchUser(e)}
          />
          {loading ? (
            <ModalLoading />
          ) : (
            results?.map((item, index) => (
              <Box marginY="10px" key={index}>
                <UserMenuCard item={item} groupModal={true} />
              </Box>
            ))
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default GroupModal;
