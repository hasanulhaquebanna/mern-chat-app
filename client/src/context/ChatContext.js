import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  let history = useHistory();
  let [user, setUser] = useState("");
  let [myChats, setMyChats] = useState([]);
  let [selectedChat, setSelectedChat] = useState();
  let [selectChatInfo, setSelectChatInfo] = useState(false);

  const getUser = async () => {
    const userInfo = await JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
  };
  useEffect(() => {
    if (!user) {
      history.push("/login");
    }
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
        selectChatInfo,
        setSelectChatInfo,
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
