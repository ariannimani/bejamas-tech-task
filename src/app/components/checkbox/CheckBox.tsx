"use client";
import React, { ChangeEvent } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  type: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, type }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams: any = useSearchParams();

  const createQueryString = (name: string, value: string | undefined) => {
    const params = new URLSearchParams(searchParams);
    params.set(name, value || "");
    return params.toString();
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const newQueryString = isChecked
      ? createQueryString(type, label?.toLowerCase())
      : "";

    router.push(pathname + "?" + newQueryString);
  };

  return (
    <input
      type="checkbox"
      className="h-5 w-5 border-2 border-black checked:bg-transparent checked:accent-black checked:text-black"
      checked={checked}
      onChange={handleCheckboxChange}
    />
  );
};

export default Checkbox;
