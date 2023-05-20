import React from "react";
import Link from "next/link";
import Image from "next/image";

import { getPages } from "@/firebase/categories";

import { LeftArrowIcon, RightArrowIcon } from "@/assets/icons";

interface PaginationProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const Pagination = async ({ searchParams }: PaginationProps) => {
  const { pages } = await getPages(searchParams);

  const currentPage =
    typeof searchParams.page === "string" ? +searchParams.page : 1;
  const pageNumbers = Array.from({ length: pages }, (_, index) => index + 1);

  const canGoBack = currentPage > 1;
  const canGoNext = currentPage < pages;

  const getQueryParamString = (params: { [key: string]: string | number }) => {
    const queryParamKeys = Object.keys(params).filter(
      (key) => params[key] !== undefined
    );
    const queryParamString = queryParamKeys
      .map((key) => `${key}=${encodeURIComponent(params[key])}`)
      .join("&");
    return queryParamString;
  };

  return (
    <div className="mb-20">
      {!!pages && (
        <div className="flex flex-row justify-center gap-4 mt-24 font-semibold text-2xl items-center">
          <Link
            href={
              canGoBack
                ? `/?${getQueryParamString({
                    ...searchParams,
                    page: currentPage - 1,
                  })}`
                : "#"
            }
            className={!canGoBack ? "hidden" : "block"}
          >
            <span>
              <Image src={LeftArrowIcon} alt="left arrow" />
            </span>
          </Link>

          {pageNumbers.map((page) => {
            if (page === null) {
              return <span key="ellipsis">...</span>;
            }
            return (
              <Link
                key={page}
                href={
                  currentPage !== page
                    ? `/?${getQueryParamString({ ...searchParams, page })}`
                    : "#"
                }
              >
                {page}
              </Link>
            );
          })}

          <Link
            href={
              canGoNext
                ? `/?${getQueryParamString({
                    ...searchParams,
                    page: currentPage + 1,
                  })}`
                : "#"
            }
            className={!canGoNext ? "hidden" : "block"}
          >
            <span>
              <Image src={RightArrowIcon} alt="right arrow" />
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Pagination;
