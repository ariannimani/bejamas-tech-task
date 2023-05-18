"use client";
import Image from "next/image";
import React from "react";
import { Button } from "@/app/components";
import { kilobytesToMegabytes } from "@/utils/utils";
import { addToCart } from "@/firebase/cartFunctions";
import { useRouter } from "next/navigation";

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
          className="h-[553px] w-[1290px] object-cover"
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
      <div className="font-bold text-[22px]">About {name}</div>
      <div className="text text-stone-500 max-w-[1290px]">
        {details.description}
      </div>
      <div className="font-bold	 text-[22px]">People also buy</div>
      <div className="flex gap-3 md:gap-6">
        {details.recommendations.map((item: any) => (
          <Image
            key={item.src}
            src={item.src}
            alt={item.alt}
            width={750}
            height={1260}
            className="w-24 h-auto object-cover"
          />
        ))}
      </div>

      <div className="font-bold	text-[22px]">Details</div>
      <div className="text-stone-500">
        <div>
          Size: {details.dimensions?.width} x {details.dimensions?.height} pixel
        </div>
        <div>Size: {kilobytesToMegabytes(details.size)}</div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
