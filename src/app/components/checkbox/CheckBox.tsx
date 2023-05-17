import React from "react";

interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  const handleCheckboxChange = () => {
    onChange && onChange(!checked);
  };

  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        className="h-5 w-5 border-2 border-black checked:bg-transparent checked:accent-black checked:text-black"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
