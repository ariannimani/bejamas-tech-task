"use client";
import Image from "next/image";
import React from "react";
import { Button } from "@/app/components";
import { kilobytesToMegabytes } from "@/utils/utils";

const FeaturedProduct = ({ product }: any) => {
  const { name, image, details } = product;

  return (
    <div className="border-b-2 group flex flex-col gap-[35px] mt-[18px]">
      <div className="font-bold	text-3xl">{name}</div>
      <div className="relative">
        <Image
          src={image.src}
          alt={image.alt}
          width={1024}
          height={1024}
          className="h-[auto] w-[100%] object-cover"
        />
        <div className="absolute bottom-0 left-0 px-10 py-5 bg-white text-base font-bold">
          Photo of the day
        </div>
      </div>
      <Button
        type="primary"
        title="Add to cart"
        onClick={() => {}}
        className="hidden group-hover:block"
      />
      <div className="font-bold text-[22px]">About {name}</div>
      <div className="text text-stone-500">{details.description}</div>
      <div className="font-bold	 text-[22px]">People also buy</div>
      <div className="flex justify-between">
        {details.recommendations.map((item) => (
          <Image
            key={item.src}
            src={item.src}
            alt={item.alt}
            width={1024}
            height={1024}
            className="w-[97.57px] h-[122.58px] object-cover"
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
