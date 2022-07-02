export const getGroupUsers = (loggedUser, groupUsers) => {
  return groupUsers?.filter((user) => user._id !== loggedUser.id);
};
export const getChatUser = (loggedUser, users) => {
  return users[0]?._id === loggedUser.id ? users[1] : users[0];
};
export const verifySameSender = (messages, message, index, loggedUserId) => {
  return (
    index < messages.length - 1 &&
    (messages[index + 1]?.sender._id !== message.sender._id ||
      messages[index + 1]?.sender._id === undefined) &&
    messages[index]?.sender._id !== loggedUserId
  );
};
export const verifyLastMessage = (messages, index, loggedUserId) => {
  return (
    index === messages.length - 1 &&
    messages[messages.length - 1]?.sender._id !== loggedUserId &&
    messages[messages.length - 1]?.sender._id
  );
};

export const verifySameSenderMargin = (
  messages,
  message,
  index,
  loggedUserId
) => {
  if (
    index < messages.length - 1 &&
    messages[index + 1]?.sender._id === message?.sender._id &&
    messages[index]?.sender._id !== loggedUserId
  )
    return 33;
  else if (
    (index < messages.length - 1 &&
      messages[index + 1]?.sender._id !== message?.sender._id &&
      messages[index]?.sender._id !== loggedUserId) ||
    (index === messages.length - 1 &&
      messages[index]?.sender._id !== loggedUserId)
  )
    return 0;
  else return "auto";
};
export const verifySameUser = (messages, message, index) => {
  return index > 0 && messages[index - 1].sender._id === message.sender._id;
};
