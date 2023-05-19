import React from "react";
import Image from "next/image";

import { CartWrapper } from "@/app/components";
import { LogoIcon } from "@/assets/icons";

const Header = () => {
  return (
    <div className="flex justify-between w-full p-6 border-b-2">
      <Image src={LogoIcon} alt="logo" />
      {/* @ts-expect-error Server Component */}
      <CartWrapper />
    </div>
  );
};

export default Header;
