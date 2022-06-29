import { Box, Input, Text } from "@chakra-ui/react";
import ModalLoading from "helpers/ModalLoading";
import UserMenuCard from "helpers/UserMenuCard";
import React from "react";
import SelectedUserBadge from "./SelectedUserBadge";

const SelectedUsers = ({
  search,
  handleSearchUser,
  loading,
  handleSelectUsers,
  selectedUsers,
  setSelectedUsers,
  results,
}) => {
  let handleUserDelete = (user) => {
    setSelectedUsers(
      selectedUsers.filter((selectedUser) => selectedUser._id !== user._id)
    );
  };
  return (
    <>
      <Input
        placeholder="Search user"
        value={search}
        onChange={(e) => handleSearchUser(e)}
      />
      <Box className="w-full h-auto m-2 flex flex-wrap">
        {selectedUsers?.map((user, index) => (
          <SelectedUserBadge
            key={index}
            handleUser={() => handleUserDelete(user)}
            user={user}
          />
        ))}
      </Box>
      {loading ? (
        <ModalLoading />
      ) : (
        results?.map((item, index) => (
          <Box marginY="10px" key={index}>
            <UserMenuCard
              item={item}
              handleSelect={() => handleSelectUsers(item)}
              groupModal={true}
            />
          </Box>
        ))
      )}
    </>
  );
};

export default SelectedUsers;