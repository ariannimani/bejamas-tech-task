import { getCartItems } from "@/firebase/cartFunctions";
import React from "react";
import Cart from "./Cart";

const CartWrapper = async () => {
  const products = []; // await getCartItems();

  if (!products) return <></>;

  return (
    <div>
      <Cart products={products} />
    </div>
  );
};

export default CartWrapper;
