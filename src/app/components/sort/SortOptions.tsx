"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { ChangeEvent } from "react";

const SortOptions = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams: any = useSearchParams();

  const createQueryString = (name: string, value: string | undefined) => {
    const params = new URLSearchParams(searchParams);
    params.set(name, value || "");
    return params.toString();
  };

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const newQueryString = value ? createQueryString("sort", value) : "";
    router.push(pathname + "?" + newQueryString);
  };

  return (
    <div className="hidden md:flex items-center">
      <label htmlFor="sortOptions" className="mr-2 text-stone-500">
        Sort by:
      </label>
      <select
        id="sortOptions"
        onChange={handleOptionChange}
        className="px-2 py-1 border border-gray-300 rounded-md"
      >
        <option value="">Price</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default SortOptions;
