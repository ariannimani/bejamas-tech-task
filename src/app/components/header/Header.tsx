import Image from "next/image";
import React from "react";
import CartWrapper from "../cart/CartWrapper";
import { LogoIcon } from "@/assets/icons";

const Header = () => {
  return (
    <div className="flex justify-between w-full p-6 border-b-2">
      <Image src={LogoIcon} alt="logo" />
      <CartWrapper />
    </div>
  );
};

export default Header;
