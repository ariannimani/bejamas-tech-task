import { getCartItems } from "@/firebase/cartFunctions";
import React from "react";
import Cart from "./Cart";

const CartWrapper = async () => {
  const products = getCartItems();

  if (!products) return <></>;

  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <Cart products={products} />
    </div>
  );
};

export default CartWrapper;
