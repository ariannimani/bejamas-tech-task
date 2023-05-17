import React from "react";
import Checkbox from "../../checkbox/CheckBox";

const FilterItem = ({ title }: any) => {
  return (
    <label className="flex gap-1 mt-4">
      <Checkbox />
      {title}
    </label>
  );
};

export default FilterItem;
