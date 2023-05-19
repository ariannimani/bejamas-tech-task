"use client";
import Image from "next/image";
import React, { FC, useState } from "react";

import { FilterIcon } from "@/assets/icons";
import Filter from "./Filter";

export interface Prices {
  id: number;
  category: string;
  prices: any[];
}

interface FilterProps {
  categories: string[];
  prices: Prices[];
}

const FilterWrapper: FC<FilterProps> = ({ categories, prices }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openFilterHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Image
        src={FilterIcon}
        alt="filter"
        className="xl:hidden"
        onClick={openFilterHandler}
      />
      {isOpen && (
        <div className="absolute left-0 z-10 bg-white w-full">
          <Filter
            categories={categories}
            prices={prices}
            openFilterHandler={openFilterHandler}
          />
        </div>
      )}
    </div>
  );
};

export default FilterWrapper;
