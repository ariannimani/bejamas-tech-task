"use client";
import React from "react";

import { Button } from "@/app/components";
import { FilterItem } from "./filter-item";

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
  return (
    <div className="hidden p-4 xl:block xl:w-1/5">
      <div className="border-b-2">
        <div className="flex justify-between mt-4">
          <h3 className="font-bold">Filter</h3>
          <h3 className="font-bold xl:hidden">X</h3>
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
      <div className="flex gap-2 mt-6 xl:hidden">
        <Button type="secondary" title="Clear" onClick={() => {}} />
        <Button type="primary" title="Save" onClick={() => {}} />
      </div>
    </div>
  );
};

export default Filter;
