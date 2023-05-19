import React from "react";

import { getCartItems } from "@/firebase/cartFunctions";

import Cart from "./Cart";

const CartWrapper = async () => {
  const products = await getCartItems();

  return (
    <div className="relative">
      {/* @ts-expect-error Server Component */}
      <Cart products={products} />
    </div>
  );
};

export default CartWrapper;
