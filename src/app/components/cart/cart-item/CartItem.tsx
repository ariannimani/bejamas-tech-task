import { Product } from "@/types";
import { convertToCurrency } from "@/utils/utils";
import Image from "next/image";
import React, { FC } from "react";

interface CartItem {
  product: Product;
}
const CartItem: FC<CartItem> = ({ product }) => {
  const { name, price, currency, image } = product;
  return (
    <div className="flex gap-6 justify-between items-center p-4">
      <div>
        <div className="font-bold">{name}</div>
        <div className="text-stone-500">
          {convertToCurrency(currency, price)}
        </div>
      </div>
      <Image
        src={image.src}
        alt={image.alt}
        width={1024}
        height={1024}
        className="w-[149px] h-[86px] object-cover"
      />
    </div>
  );
};

export default CartItem;
