import { Box } from "@chakra-ui/react";
import { Home } from "components";
import { ChatState } from "context/ChatContext";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Main = () => {
  const history = useHistory();
  let { user, setUser } = ChatState();
  useEffect(() => {
    if (!localStorage?.getItem("userInfo")) {
      history.push("/login");
    } else {
      setUser(JSON.parse(localStorage.getItem("userInfo")));
    }
  }, [history, setUser]);
  return (
    <Box>
      {/* sidebar drawer */}
      <Home user={user} />
    </Box>
  );
};

export default Main;
