"use client";
import Image from "next/image";
import React, { useState } from "react";

import { FilterIcon } from "@/assets/icons";
import { FilterContext } from "@/app/context/FilterContext";

const FilterWrapper = () => {
  const [isOpen, setIsOpen] = useState(true);

  const openFilterHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <FilterContext.Provider value={isOpen}>
      <div>
        <Image
          src={FilterIcon}
          alt="filter"
          className="xl:hidden"
          onClick={openFilterHandler}
        />
      </div>
    </FilterContext.Provider>
  );
};

export default FilterWrapper;
