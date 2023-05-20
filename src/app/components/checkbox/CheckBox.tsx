import React, { ChangeEvent, RefObject } from "react";

interface CheckboxProps {
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ onChange, type }) => {
  return (
    <input
      type="checkbox"
      className="h-5 w-5 border-2 border-black checked:bg-transparent checked:accent-black checked:text-black"
      onChange={onChange}
      data-type={type}
    />
  );
};

export default Checkbox;
