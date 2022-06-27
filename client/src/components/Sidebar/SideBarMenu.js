import React, { useEffect, useState } from "react";
import { Box, useDisclosure } from "@chakra-ui/react";
import { MdPersonSearch } from "react-icons/md";
import { SiWechat } from "react-icons/si";
import { Link, useHistory } from "react-router-dom";
import classNames from "classnames";
//
import SideDrawer from "./SideDrawer";

const SideBarMenu = ({ user }) => {
  let btnRef = React.useRef();
  let [url, setUrl] = useState(null);
  let history = useHistory();
  let { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    setUrl(history.location.pathname);
  }, []);

  return (
    <Box className="flex flex-col items-center py-2 px-1 h-4/5">
      <Box className="pt-5">
        <Link to="#" className="w-[80px] block ">
          <Box
            backdropFilter="10px"
            border="3px solid rgba(255,255,255,0.1)"
            backdropBlur="rgb(195 195 195 / 6%)"
            className="text-[#ddd] my-3 mx-auto w-[30px] rounded-[5px] p-[18px] h-[30px] relative flex items-center justify-center cursor-pointer"
            onClick={onOpen}
            ref={btnRef}
          >
            <MdPersonSearch className="text-3xl absolute" />
            <SideDrawer
              isOpen={isOpen}
              onClose={onClose}
              btnRef={btnRef}
              user={user}
            />
          </Box>
        </Link>
      </Box>
      <Box className="pt-5">
        <Link
          to="#"
          className={classNames(
            "w-[80px] block",
            url === "/" && "border-r-[3px] border-primaryYellow"
          )}
        >
          <Box
            backdropFilter="10px"
            border="3px solid rgba(255,255,255,0.1)"
            backdropBlur="rgb(195 195 195 / 6%)"
            className="text-[#ddd] my-3 mx-auto w-[30px] rounded-[5px] p-[18px] h-[30px] relative flex items-center justify-center cursor-pointer"
          >
            <SiWechat className="text-3xl absolute" />
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default SideBarMenu;
