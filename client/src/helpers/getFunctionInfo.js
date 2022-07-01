export const getGroupUsers = (loggedUser, groupUsers) => {
  return groupUsers?.filter((user) => user._id !== loggedUser.id);
};
export const getChatUser = (loggedUser, users) => {
  return users[0]?._id === loggedUser.id ? users[1] : users[0];
};
