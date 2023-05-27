"use client";
import Image from "next/image";
import React, { useTransition } from "react";
import { useRouter } from "next/navigation";

import { addToCart } from "@/firebase/cartFunctions";

import { Button } from "@/app/components";

import { capitalizeFirstLetter, convertToCurrency } from "@/utils/utils";

const ProductCard = ({ product }: any) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const { name, category, price, currency, image, bestseller } = product;

  const addToCartHandler = () => {
    addToCart(product).then(() =>
      startTransition(() => {
        router.refresh();
      })
    );
  };

  return (
    <article className="mt-4">
      <div className="relative group">
        <Image
          src={image.src}
          alt={image.alt}
          width={1024}
          height={1024}
          className="h-[502px] w-[362px] object-cover"
        />
        {bestseller && (
          <span className="absolute top-0 left-0 p-2 bg-white">
            Best seller
          </span>
        )}
        <Button
          type="primary"
          title="Add to cart"
          isLoading={isPending}
          onClick={() => addToCartHandler()}
          className="hidden group-hover:block group-hover:absolute bottom-0 left-0"
          loadingContent="ADDING"
        />
      </div>
      <span className="block font-bold text-lg text-stone-500 mt-4">
        {capitalizeFirstLetter(category)}
      </span>
      <h3 className="font-bold text-3xl mt-4">{name}</h3>
      <span className="block text-stone-500 text-3xl mt-4">
        {convertToCurrency(currency, price)}
      </span>
    </article>
  );
};

export default ProductCard;
