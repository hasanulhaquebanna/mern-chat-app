export const getGroupUsers = (loggedUser, groupUsers) => {
  return groupUsers?.filter((user) => user._id !== loggedUser.id);
};
