import { ChatState } from "context/ChatContext";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const { user } = ChatState();
  console.log(user);
  //

  return <div>Home</div>;
};

export default Home;
