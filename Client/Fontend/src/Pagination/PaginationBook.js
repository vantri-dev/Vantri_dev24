import React from "react";
import { useContext } from "react";
import { PageBookContext } from "../components/pages/CategoryProduct/BookProduct/ProductBook/ListProductBook";
import ReactPaginate from "react-paginate";
export default function Pagination() {
  const pageProductBook = useContext(PageBookContext);
  return (
    <ReactPaginate
      className="flex items-center justify-center pb-5  pt-7 "
      breakLabel="..."
      nextLinkClassName="text-[1.5rem] text-slate-400  pl-1  "
      nextLabel=">"
      onPageChange={pageProductBook.handlePageClick}
      pageRangeDisplayed={4}
      pageLinkClassName="  text-[1.2rem]   text-slate-400  mx-6"
      pageCount={pageProductBook.pageCount}
      previousLinkClassName="text-[1.5rem] text-slate-400  pr-1"
      previousLabel="<"
      activeLinkClassName=" active bg-violet px-4 py-1 rounded text-white"
      renderOnZeroPageCount={null}
    />
  );
}
