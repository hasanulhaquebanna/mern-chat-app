import { Image } from "helpers";
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="w-[50px] h-[50px] rounded-full overflow-hidden relative"
    >
      <Image src="/logo.png" />
    </Link>
  );
};

export default Logo;
