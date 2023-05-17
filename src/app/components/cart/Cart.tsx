import React from "react";
import { Button } from "@/app/components";

import CartItem from "./cart-item/CartItem";

const Cart = () => {
  return (
    <div className="border-2 p-4">
      <div className="border-b-2 border-stone-300 max-h-[400px] overflow-auto">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <Button
        type="secondary"
        title="Clear"
        onClick={() => {}}
        className="mt-6"
      />
    </div>
  );
};

export default Cart;
