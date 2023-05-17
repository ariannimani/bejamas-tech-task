import { CartIcon, LogoIcon } from "@/assets/icons";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between w-full p-6 border-b-2">
      <Image src={LogoIcon} alt="logo" />
      <Image src={CartIcon} alt="logo" />
    </div>
  );
};

export default Header;
