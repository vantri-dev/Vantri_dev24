import React from "react";
import { useContext } from "react";
import { PageHouseholdElectricityContext } from "../components/pages/CategoryProduct/HouseholdElectricity/ProductHouseholdElectricity/ListProductHouseholdElectricity";
import ReactPaginate from "react-paginate";
export default function Pagination() {
  const pageProductHouseholdElectricity = useContext(
    PageHouseholdElectricityContext
  );
  return (
    <ReactPaginate
      className="flex items-center justify-center pb-5  pt-7 "
      breakLabel="..."
      nextLinkClassName="text-[1.5rem] text-slate-400  pl-1  "
      nextLabel=">"
      onPageChange={pageProductHouseholdElectricity.handlePageClick}
      pageRangeDisplayed={4}
      pageLinkClassName="  text-[1.2rem]   text-slate-400  mx-6"
      pageCount={pageProductHouseholdElectricity.pageCount}
      previousLinkClassName="text-[1.5rem] text-slate-400  pr-1"
      previousLabel="<"
      activeLinkClassName=" active bg-violet px-4 py-1 rounded text-white"
      renderOnZeroPageCount={null}
    />
  );
}
