export const getChatUser = (loggedUser, users) => {
  return users[0]._id === loggedUser.id ? users[1] : users[0];
};
