import React from "react";
import { ProductCard } from "@/app/components";
import { products } from "@/app/data/data.js";
import Filter from "../filter/Filter";
import Image from "next/image";
import { FilterIcon } from "@/assets/icons";
const ProductList = () => {
  return (
    <div className="mt-5">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold">Photography</span>
          <span className="font-bold text-3xl">/</span>
          <span className="text-stone-500">Premium Photos</span>
        </div>
        <Image src={FilterIcon} alt="filter" className="xl:hidden" />
      </div>
      <div className="flex">
        <Filter />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
