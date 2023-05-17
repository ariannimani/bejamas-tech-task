"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/app/components";
import { capitalizeFirstLetter, convertToCurrency } from "@/utils/utils";

const ProductCard = ({ product }: any) => {
  const { name, category, price, currency, image, bestseller } = product;

  return (
    <div className="mt-4">
      <div className="relative group">
        <Image
          src={image.src}
          alt={image.alt}
          width={1024}
          height={1024}
          className="h-[502px] w-[362px] object-cover"
        />
        {bestseller && (
          <div className="absolute top-0 left-0 p-2 bg-white">Best seller</div>
        )}
        <Button
          type="primary"
          title="Add to cart"
          onClick={() => {}}
          className="hidden group-hover:block group-hover:absolute bottom-0 left-0"
        />
      </div>
      <div className="font-bold text-lg text-stone-500 mt-4">
        {capitalizeFirstLetter(category)}
      </div>
      <div className="font-bold text-3xl mt-4">{name}</div>
      <div className="text-stone-500 text-3xl mt-4">
        {convertToCurrency(currency, price)}
      </div>
    </div>
  );
};

export default ProductCard;
