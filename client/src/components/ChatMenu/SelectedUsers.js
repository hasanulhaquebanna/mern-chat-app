import { Box, Input } from "@chakra-ui/react";
import { ModalLoading, UserMenuCard } from "libs";
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
