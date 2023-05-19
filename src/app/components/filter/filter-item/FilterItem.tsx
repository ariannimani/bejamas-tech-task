"use client";

import React from "react";

import { Checkbox } from "@/app/components";

const FilterItem = ({ title, type }: any) => {
  return (
    <label className="flex gap-1 mt-4">
      <Checkbox label={title} type={type} />
      {title}
    </label>
  );
};

export default FilterItem;
