import React from "react";
import Image from "next/image";

import { LogoIcon } from "@/assets/icons";
import { CartWrapper } from "@/app/components";

const Header = () => {
  return (
    <header className="flex justify-between w-full p-6 border-b-2">
      <Image src={LogoIcon} alt="logo" />
      {/* @ts-expect-error Server Component */}
      <CartWrapper />
    </header>
  );
};

export default Header;
