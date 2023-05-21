"use client";
import React, { FC, useState, useTransition } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { clearCartItems } from "@/firebase/cartFunctions";

import { Product } from "@/types";

import { CartItem } from "./cart-item";
import { Button } from "@/app/components";
import { CartIcon, CloseIcon } from "@/assets/icons";

interface CartProps {
  products: Product[];
}
const Cart: FC<CartProps> = ({ products }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const openCartHandler = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter();

  const clearCartHandler = () => {
    clearCartItems().then(() =>
      startTransition(() => {
        router.refresh();
      })
    );
  };
  return (
    <>
      <div className="">
        <Image src={CartIcon} alt="cart" onClick={openCartHandler} />
        {products.length > 0 && (
          <div className="bg-black text-white text-center w-[22px] h-[22px] absolute -right-3 -bottom-4">
            {products.length}
          </div>
        )}
      </div>
      {isOpen && (
        <div className="border-2 p-4 absolute md:top-11 right-0 z-10 bg-white md:w-96 w-72">
          <div>
            <div className="relative h-5">
              <Image
                src={CloseIcon}
                alt="close"
                className="absolute right-0"
                onClick={openCartHandler}
              />
            </div>
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
              isLoading={isPending}
              loadingContent="CLEARING"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
