"use client";
import React from "react";

import { FilterItem } from "./filter-item";
import { useFilter } from "@/app/context/FilterContext";

export interface Prices {
  id: number;
  category: string;
  prices: any[];
}

interface FilterProps {
  categories: string[];
  prices: Prices[];
}

const Filter = ({ categories, prices }: FilterProps) => {
  const { isVisible, setIsVisible } = useFilter();

  const openFilterHandler = () => {
    setIsVisible({ type: "TOGGLE", isVisible: false });
  };

  return (
    <>
      {isVisible && (
        <div className="p-4 absolute top-0 left-0 right-0 xl:relative xl:block bg-white z-10">
          <div className="border-b-2">
            <div className="flex justify-between mt-4">
              <h3 className="font-bold xl:block">Category</h3>
              <h3
                className="font-bold xl:hidden cursor-pointer"
                onClick={openFilterHandler}
              >
                X
              </h3>
            </div>
            {categories.map((category) => (
              <FilterItem
                key={category}
                title={category}
                type="category"
                multiple={true}
              />
            ))}

            <h3 className="font-bold mt-4">Price Range</h3>
            <ul>
              {prices.map((price) => (
                <FilterItem
                  key={price.category}
                  title={price.category}
                  type="price"
                />
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Filter;
