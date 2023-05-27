import React from "react";

import { getDistinctCategories } from "@/firebase/categories";
import { getProductsFromFirebase } from "@/firebase/getProducts";

import {
  Pagination,
  ProductCard,
  Filter,
  SortOptions,
  FilterIconWrapper,
} from "@/app/components";

import { FilterProvider } from "@/app/context/FilterContext";

interface ProductListProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const ProductList = async ({ searchParams }: ProductListProps) => {
  const { products } = await getProductsFromFirebase(searchParams);
  const { categories, prices } = await getDistinctCategories();

  return (
    <FilterProvider>
      <section className="mt-5 w-full relative">
        <header>
          <h1 className="flex items-center gap-2 md:text-3xl font-bold">
            <span>Photography</span>
            <span className="text-3xl">/</span>
            <span className="text-stone-500">Premium Photos</span>
          </h1>
          <div className="flex justify-between">
            <FilterIconWrapper />
            <SortOptions />
          </div>
        </header>
        <section className="flex justify-center xl:justify-between mt-8">
          <aside className="xl:block">
            <Filter categories={categories} prices={prices} />
          </aside>
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-6">
              {products.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
          ) : (
            <div className="mt-4 flex justify-center items-center w-full">
              <span>NO IMAGE FOUND</span>
            </div>
          )}
        </section>
        {/* @ts-expect-error Server Component */}
        <Pagination searchParams={searchParams} />
      </section>
    </FilterProvider>
  );
};

export default ProductList;
