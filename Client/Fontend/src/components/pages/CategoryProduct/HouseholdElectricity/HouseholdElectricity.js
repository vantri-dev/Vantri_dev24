import React from "react";
import { BsChevronRight } from "react-icons/bs";
import SliderHouseholdElectricity from "./SliderHouseholdElectricity";
import ProductHouseholdElectricity from "./ProductHouseholdElectricity/ProductHouseholdElectricity";
import { Link } from "react-router-dom";
export default function HouseholdElectricityProduct() {
  const listPhoneCompany = [
    {
      name: "Bếp các loại",
      path: "/brandphone",
      imageHouseholdElectricity:
        "https://salt.tikicdn.com/cache/750x750/ts/product/89/21/e1/c4feb600f5325fc02378d8134bc2dea1.jpg.webp",
    },
    {
      name: "Máy hút mùi",
      imageHouseholdElectricity:
        "https://salt.tikicdn.com/cache/750x750/ts/product/7d/35/94/2b841e9e4cbec38b2ac4923857986a03.png.webp",
    },
    {
      name: "Máy làm kem",
      imageHouseholdElectricity:
        "https://salt.tikicdn.com/cache/750x750/ts/product/3e/4e/06/23b5a710449d2efa5246b976c48ddb09.jpg.webp",
    },
    {
      name: "Máy đánh trứng",
      imageHouseholdElectricity:
        "https://salt.tikicdn.com/cache/750x750/ts/product/92/21/df/73405155cdc180d85c64a06ddd842283.png.webp",
    },
    {
      name: "Lò vi sóng",
      imageHouseholdElectricity:
        "https://salt.tikicdn.com/cache/750x750/ts/product/db/bd/9a/93ac01a7492bbc0b13db649068b5050e.png.webp",
    },
  ];
  return (
    <div className="w-full pt-[10px] pr-[100px]  pl-[90px] grid gap-3  bg-gray-100   ">
      <div className="w-full flex items-center">
        <Link to="/">
          <span className="text-[0.9rem] text-slate-500">Trang chủ</span>
        </Link>
        <BsChevronRight className="text-[0.9rem] mt-1 text-slate-400 mr-1" />
        <Link>
          <span className="text-[0.9rem]">Điện thoại</span>
        </Link>
      </div>
      <SliderHouseholdElectricity />
      <div className="w-full bg-white  h-[390px] rounded ">
        <div className="flex items-center">
          <p className="text-[1.09rem]   font-black  py-5 pl-4">Thương hiệu</p>
          <img
            className="w-15 h-5 pl-1 mt-1"
            alt=""
            src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png"
          />
        </div>

        <ul className=" grid grid-cols-5 ">
          {listPhoneCompany.map((phoneCompany, index) => {
            return (
              <Link to={phoneCompany.path} key={index}>
                <li className=" col-span-1 mx-5 w-[73%] cursor-pointer  mt-1 py-2 px-2 rounded-lg border hover:border-violet transition-all ease-out translate-y-0 hover:-translate-y-[3px]">
                  <div className="   rounded-xl">
                    <div className="  flex  items-center">
                      <img
                        className="w-full h-[200px] rounded  object-contain"
                        alt=""
                        src={phoneCompany.imageHouseholdElectricity}
                      />
                    </div>
                    <div className="w-full flex justify-center py-4   items-center">
                      <span className="  font-mono font-black text-[1.2rem] object-contain pt-[2px]">
                        {phoneCompany.name}
                      </span>
                    </div>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <ProductHouseholdElectricity />
    </div>
  );
}
