/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { useEffect } from "react";
import { apiProduct } from "../callApi";
export default function DetailProduct() {
  const [detailsProduct,setDetailsProduct] = useState([])
    useEffect(() => {
      const handleGetImage = async () => {
        const infor = await apiProduct();
        infor.map((item) => {
           const inforDetailProducts = item.detailsproducts
            inforDetailProducts.forEach(
             (item) => {
              setDetailsProduct(item);
             }
           );
           
        });
      };
      handleGetImage();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  return (
    <div className=" bg-slate-100 ">
      <div className=" bg-white mt-3  ">
        <div className="px-5 py-5">
          <span className="text-[1.1rem]  font-light  text-slate-500 uppercase">
            Chi tiết sản phẩm
          </span>
        </div>
        <div className="flex  justify-start  items-center">
          <div className="flex items-start justify-start flex-col">
            <span className="px-10 py-[3.5px] text-[1rem] text-gray-400">
              Thương hiệu
            </span>
            <span className="px-10 py-[3.5px] text-[1rem] text-gray-400">
              Xuất xứ
            </span>
            <span className="px-10 py-[3.5px] text-[1rem] text-gray-400">
              Hàng chính hãng
            </span>
            <span className="px-10 py-[3.5px] text-[1rem] text-gray-400">
              Gửi từ
            </span>
          </div>
          <div className="flex items-start justify-start flex-col">
            <span className="px-10 py-[3px] text-[1rem] text-textword font-black">
              {detailsProduct.trademark}
            </span>
            <span className="px-10 py-[3.5px] text-[1rem] text-textword font-black">
              {detailsProduct.origin}
            </span>
            <span className="px-10 py-[3.5px] text-[1rem] text-textword font-black">
              {detailsProduct.genuine === true ? "Có" : "Không"}
            </span>
            <span className="px-10 py-[3.5px] text-[1rem] text-textword font-black">
            {detailsProduct.sentFrom}
            </span>
          </div>
        </div>  
      </div>
    </div>
  );
}
