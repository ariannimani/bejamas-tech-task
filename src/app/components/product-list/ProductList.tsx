import React, { FC } from "react";
import { Pagination, ProductCard } from "@/app/components";
import Filter from "../filter/Filter";
import Image from "next/image";
import { FilterIcon } from "@/assets/icons";
import { getDistinctCategories } from "@/firebase/categories";
import SortOptions from "../sort/SortOptions";
import { Product } from "@/types";

interface ProductListProps {
  products: Product[];
  searchParams: { [key: string]: string | string[] | undefined };
}
const ProductList = async ({ products, searchParams }: ProductListProps) => {
  const { categories, prices, pages } = await getDistinctCategories();

  if (!categories && !prices && !pages) return <></>;
  return (
    <div className="mt-5">
      <div className="flex justify-between">
        <div className="flex items-center gap-2 md:text-3xl">
          <span className="font-bold">Photography</span>
          <span className="font-bold text-3xl">/</span>
          <span className="text-stone-500">Premium Photos</span>
        </div>
        <Image src={FilterIcon} alt="filter" className="xl:hidden" />
        <SortOptions />
      </div>
      <div className="flex md:justify-between mt-8">
        <Filter categories={categories} prices={prices} />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {products.length > 0 &&
            products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
        </div>
      </div>
      <Pagination searchParams={searchParams} totalPages={6} />
    </div>
  );
};

export default ProductList;
