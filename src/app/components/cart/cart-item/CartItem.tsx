import React, { FC } from "react";
import Image from "next/image";

import { Product } from "@/types";

import { convertToCurrency } from "@/utils/utils";

interface CartItemProps {
  product: Product;
}

const CartItem: FC<CartItemProps> = ({ product }) => {
  const { name, price, currency, image } = product;
  return (
    <li className="flex gap-6 justify-between items-center p-4">
      <div>
        <h4 className="font-bold">{name}</h4>
        <span className="text-stone-500">
          {convertToCurrency(currency, price)}
        </span>
      </div>
      <figure>
        <Image
          src={image.src}
          alt={image.alt}
          width={1024}
          height={1024}
          className="w-[149px] h-[86px] object-cover"
        />
      </figure>
    </li>
  );
};

export default CartItem;
