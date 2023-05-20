"use client";
import React, { useEffect } from "react";
import Image from "next/image";

import { FilterIcon } from "@/assets/icons";
import { useFilter } from "@/app/context/FilterContext";
import useScreenWidth from "@/app/hooks/useScreenWidth";

const FilterIconWrapper = () => {
  const { isVisible, setIsVisible } = useFilter();
  const widthSize = useScreenWidth();

  const openFilterHandler = () => {
    setIsVisible({ type: "TOGGLE", isVisible: !isVisible });
  };

  const mediumWidth = 1279;

  useEffect(() => {
    if (widthSize > mediumWidth) {
      setIsVisible({ type: "TOGGLE", isVisible: true });
    }

    if (widthSize <= mediumWidth) {
      setIsVisible({ type: "TOGGLE", isVisible: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [widthSize]);

  return (
    <Image
      src={FilterIcon}
      alt="filter"
      className="xl:hidden"
      onClick={openFilterHandler}
    />
  );
};

export default FilterIconWrapper;
