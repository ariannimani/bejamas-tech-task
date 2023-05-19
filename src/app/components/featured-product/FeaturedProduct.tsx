"use client";
import Image from "next/image";
import React from "react";
import { Button } from "@/app/components";
import { addToCart } from "@/firebase/cartFunctions";
import { useRouter } from "next/navigation";
import Details from "./details/Details";

const FeaturedProduct = ({ product }: any) => {
  const router = useRouter();
  const { name, image, details } = product;

  const addToCartHandler = () => {
    addToCart(product);
    router.refresh();
  };

  return (
    <div className="border-b-2 group flex flex-col gap-[35px] mt-[18px]">
      <div className="font-bold	text-3xl">{name}</div>
      <div className="relative">
        <Image
          src={image.src}
          alt={image.alt}
          width={details.dimensions.width}
          height={details.dimensions.height}
          className="h-fit md:h-[553px] object-cover"
        />
        <div className="absolute bottom-0 left-0 px-10 py-5 bg-white text-base font-bold">
          Photo of the day
        </div>
      </div>
      <Button
        type="primary"
        title="Add to cart"
        onClick={() => addToCartHandler()}
      />
      <Details
        name={name}
        description={details.description}
        recommendations={details.recommendations}
        dimensions={details.dimensions}
        size={details.size}
      />
    </div>
  );
};

export default FeaturedProduct;
