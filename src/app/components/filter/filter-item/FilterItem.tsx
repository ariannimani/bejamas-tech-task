"use client";

import React, { ChangeEvent, FC } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

import { createQueryString } from "@/utils/utils";
import { Checkbox } from "@/app/components";

interface FilterItemProps {
  title: string;
  type: string;
  multiple?: boolean;
}

const FilterItem: FC<FilterItemProps> = ({ title, type, multiple = false }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams: any = useSearchParams();

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const current = new URLSearchParams(searchParams);
    let newTitle = "";

    if (searchParams)
      if (isChecked) {
        if (multiple) {
          const prevTitle = current.get(type);
          newTitle = prevTitle
            ? prevTitle + "|" + title.toLowerCase()
            : title.toLowerCase();
          current.set(type, newTitle);
          current.delete("page");
        } else newTitle = title;
      } else {
        const prevTitle = current.get(type);
        if (prevTitle) {
          const titles = prevTitle.split("|");
          const updatedTitles = titles.filter(
            (t) => t.toLowerCase() !== title.toLowerCase()
          );
          newTitle = updatedTitles.join("|");
          current.set(type, newTitle);
        }
      }

    const newQueryString =
      newTitle.length !== 0 ? createQueryString(type, newTitle, current) : "";

    router.push(pathname + "?" + newQueryString);

    if (!multiple) {
      // Uncheck all prices checkboxes except the current one
      const checkboxes = document.querySelectorAll(
        `input[type="checkbox"][data-type=${type}]`
      );
      checkboxes.forEach((checkbox) => {
        if (checkbox !== event.target) {
          (checkbox as HTMLInputElement).checked = false;
        }
      });
    }
  };

  return (
    <label className="flex gap-1 mt-4">
      <Checkbox onChange={handleCheckboxChange} type={type} />
      {title}
    </label>
  );
};

export default FilterItem;
