"use client";
import React, { useState } from "react";
import FilterItem from "./filter-item/FilterItem";
import Button from "../button/Button";

const Filter = () => {
  //   const [selectedCategories, setSelectedCategories] = useState([]);
  //   const [selectedPriceRange, setSelectedPriceRange] = useState("");

  //   const handleCategoryChange = (category) => {
  //     if (selectedCategories.includes(category)) {
  //       setSelectedCategories(selectedCategories.filter((c) => c !== category));
  //     } else {
  //       setSelectedCategories([...selectedCategories, category]);
  //     }
  //   };

  //   const handlePriceRangeChange = (priceRange) => {
  //     setSelectedPriceRange(priceRange);
  //   };

  return (
    <div className="hidden p-4 xl:block xl:w-1/5">
      <div className="border-b-2">
        <div className="flex justify-between mt-4">
          <h3 className="font-bold">Filter</h3>
          <h3 className="font-bold xl:hidden">X</h3>
        </div>
        <FilterItem title="People" />
        <FilterItem title="People" />
        <FilterItem title="People" />

        <h3 className="font-bold mt-4">Price Range</h3>
        <FilterItem title="100-200" />
        <FilterItem title="200-300" />
      </div>
      <div className="flex gap-2 mt-6 xl:hidden">
        <Button type="secondary" title="Clear" onClick={() => {}} />
        <Button type="primary" title="Save" onClick={() => {}} />
      </div>
    </div>
  );
};

export default Filter;
