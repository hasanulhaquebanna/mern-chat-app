import React from "react";
import { Box, IconButton } from "@chakra-ui/react";
import classNames from "classnames";
import { TiDelete } from "react-icons/ti";

import { ChatState } from "context/ChatContext";

const UserInfo = () => {
  let { selectChatInfo, setSelectChatInfo } = ChatState();
  return (
    <Box
      marginLeft="0px"
      background="rgba( 255, 255, 255, 0.22 )"
      className={classNames(
        " w-[25%] h-screen relative group",
        selectChatInfo && "hidden"
      )}
    >
      <IconButton
        position="absolute"
        borderRadius="50%"
        right="-5px"
        top="-5px"
        background="rgba( 255, 255, 255, 0.22 )"
        boxShadow="-5px 5px 50px 0 rgb(82 82 92 / 37%)"
        backdropFilter="blur( 8px )"
        border="1px solid rgba( 255, 255, 255, 0.18 )"
        aria-label="hide side info"
        icon={<TiDelete />}
        onClick={() => setSelectChatInfo((prev) => !prev)}
        className="!hidden group-hover:!flex"
      />
    </Box>
  );
};

export default UserInfo;
