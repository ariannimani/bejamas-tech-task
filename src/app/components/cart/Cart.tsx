"use client";
import React, { FC, useState } from "react";
import { Button } from "@/app/components";

import Image from "next/image";
import CartItem from "./cart-item/CartItem";
import { CartIcon } from "@/assets/icons";
import { clearCartItems } from "@/firebase/cartFunctions";
import { useRouter } from "next/navigation";
import { addProducts } from "@/firebase/getProducts";
import { Product } from "@/types";

interface CartProps {
  products: Product[];
}
const Cart: FC<CartProps> = ({ products }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openCartHandler = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter();

  const clearCartHandler = () => {
    // clearCartItems();
    addProducts();
    router.refresh();
  };
  return (
    <>
      <div className="relative">
        <Image src={CartIcon} alt="logo" onClick={openCartHandler} />
        <div className="bg-black text-white p-1 w-5 h-5 absolute right-0 bottom-1">
          {products.length}
        </div>
      </div>
      {isOpen && (
        <div className="border-2 p-4 absolute top-12 right-0 z-10 bg-white w-96 m-10">
          {products.length > 0 ? (
            <div className="border-b-2 border-stone-300 max-h-[400px] overflow-auto">
              {products.map((product) => (
                <CartItem key={product.name} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center">Cart is Empty</div>
          )}
          <Button
            type="secondary"
            title="Clear"
            onClick={() => clearCartHandler()}
            className="mt-6"
          />
        </div>
      )}
    </>
  );
};

export default Cart;
