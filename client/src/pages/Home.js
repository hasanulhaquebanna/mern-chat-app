import { ChatState } from "context/ChatContext";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const { user } = ChatState();
  console.log(user);
  //
  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      history.push("/login");
    }
  }, [history, user]);

  return <div>{user?.id}</div>;
};

export default Home;
