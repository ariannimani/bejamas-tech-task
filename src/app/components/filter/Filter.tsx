"use client";
import React, { useContext } from "react";

import { Button } from "@/app/components";
import { FilterItem } from "./filter-item";
import { FilterContext } from "@/app/context/FilterContext";

export interface Prices {
  id: number;
  category: string;
  prices: any[];
}

interface FilterProps {
  categories: string[];
  prices: Prices[];
  openFilterHandler?: () => void;
}
const Filter = ({ categories, prices, openFilterHandler }: FilterProps) => {
  const isOpen = useContext(FilterContext);
  console.log({ isOpen });
  return (
    <>
      {isOpen && (
        <div className="p-4 xl:block">
          <div className="border-b-2">
            <div className="flex justify-between mt-4">
              <h3 className="hidden font-bold xl:block">Category</h3>
              <h3 className="font-bold xl:hidden">Category</h3>
              <h3
                className="font-bold xl:hidden cursor-pointer"
                onClick={openFilterHandler}
              >
                X
              </h3>
            </div>
            {categories.map((category) => (
              <FilterItem key={category} title={category} type="category" />
            ))}

            <h3 className="font-bold mt-4">Price Range</h3>
            {prices.map((price) => (
              <FilterItem
                key={price.category}
                title={price.category}
                type="price"
                value={price.prices}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Filter;
