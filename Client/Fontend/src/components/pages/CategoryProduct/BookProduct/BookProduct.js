import React from "react";
import { BsChevronRight } from "react-icons/bs";
import SliderBook from "./SliderBook";
import { Link } from "react-router-dom";
import ProductBook from "./ProductBook/ProductBook";
export default function BookProduct() {
  const listPhoneCompany = [
    {
      name: "Du ký",
      path: "/brandphone",
      imgeBook:
        "https://salt.tikicdn.com/cache/750x750/ts/product/60/5f/0c/1322d346b88a6940b8c93d105dec840d.jpg.webp",
    },
    {
      name: "Tiểu thuyết",
      imgeBook:
        "https://salt.tikicdn.com/cache/750x750/ts/product/93/7d/f6/f540320bc2f5205cbbe11d068c565053.jpg.webp",
    },
    {
      name: "Sách kinh kế",
      imgeBook:
        "https://salt.tikicdn.com/cache/750x750/ts/product/20/de/79/29f78d65d3617a6a181bdcb934013da4.png.webp",
    },
    {
      name: "Kỹ năng sống",
      imgeBook:
        "https://salt.tikicdn.com/cache/750x750/ts/product/5d/2e/5a/7ee00ccc8a457429914d6dd089805588.png.webp",
    },
    {
      name: "Truyện ngôn tình",
      imgeBook:
        "https://salt.tikicdn.com/cache/750x750/ts/product/ee/f1/cf/0b6357d567f3b9060400a69527962e32.jpg.webp",
    
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
          <span className="text-[0.9rem]">Nhà sách</span>
        </Link>
      </div>
      <SliderBook />

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
                        src={phoneCompany.imgeBook}
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
      <ProductBook/>
    </div>
  );
}
