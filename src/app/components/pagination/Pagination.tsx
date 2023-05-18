import Link from "next/link";
import React, { FC } from "react";

interface PaginationProps {
  searchParams: { [key: string]: string | string[] | undefined };
  totalPages: number;
}

const Pagination: FC<PaginationProps> = ({ searchParams, totalPages }) => {
  const currentPage =
    typeof searchParams.page === "string" ? +searchParams.page : 1;
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const canGoBack = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  return (
    <div className={"flex flex-row justify-center gap-2 mt-24"}>
      <Link href={canGoBack ? `/?page=${currentPage - 1}` : {}}>
        <span>Previous</span>
      </Link>

      {pageNumbers.map((page) => {
        if (page === null) {
          return <span key="ellipsis">...</span>;
        }
        return (
          <Link key={page} href={currentPage !== page ? `/?page=${page}` : {}}>
            {page}
          </Link>
        );
      })}

      <Link href={canGoNext ? `/?page=${currentPage + 1}` : {}}>
        <span>Next</span>
      </Link>
    </div>
  );
};

export default Pagination;
