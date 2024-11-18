import React from "react";
import CategoryHouseholdElectricity from "./CategoryHouseholdElectricity";
import ListProductHouseholdElectricity from "./ListProductHouseholdElectricity";
export default function ProductHouseholdElectricity() {
  return (
    <div className="w-full grid grid-cols-12 gap-3 mb-[13px]">
      <div className="bg-white col-span-2   rounded max-h-[1120px] ">
        <CategoryHouseholdElectricity />
      </div>
      <div className=" col-span-10">
        <ListProductHouseholdElectricity />
      </div>
    </div>
  );
}
