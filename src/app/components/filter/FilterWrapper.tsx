"use client";
import React from "react";
import Image from "next/image";

import { FilterIcon } from "@/assets/icons";
import { FilterAction, useFilter } from "@/app/context/FilterContext";

const FilterWrapper = () => {
  const { isVisible, setIsVisible } = useFilter();

  const openFilterHandler = () => {
    const filterAction: FilterAction = {
      type: "TOGGLE",
      isVisible: !isVisible,
    };
    setIsVisible(filterAction);
  };

  return (
    <Image
      src={FilterIcon}
      alt="filter"
      className="xl:hidden"
      onClick={openFilterHandler}
    />
  );
};

export default FilterWrapper;
