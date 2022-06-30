import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  let [user, setUser] = useState("");
  let [myChats, setMyChats] = useState([]);
  let [selectedChat, setSelectedChat] = useState();

  const getUser = async () => {
    const userInfo = await JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <ChatContext.Provider
      value={{
        user,
        setUser,
        myChats,
        setMyChats,
        selectedChat,
        setSelectedChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
