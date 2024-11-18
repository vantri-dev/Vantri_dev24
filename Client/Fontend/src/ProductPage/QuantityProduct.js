/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useEffect } from "react";
import { apiProduct } from "../callApi";
export default function QuantityProduct(props) {
  const {idProduct} =props
  const [quantityProduct, setQuantityProduct] = useState(null || 1);
    useEffect(() => {
      const handleGetInfor = async () => {
        try {
          const products = await apiProduct();
          const dataIdProduct = products.find(
            (product) => product._id === idProduct
          )
         setQuantityProduct(dataIdProduct.quantity)
        } catch (error) {
          console.log(error);
        }
      };
      handleGetInfor();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  const IncreaseProduct = () => {
    if (quantityProduct < 0) {
      setQuantityProduct(1);
    } else {
      if (quantityProduct < 999) {
        setQuantityProduct((prev) => prev + 1);
      }
    }
  };
  const DiscountProduct = () => {
    if (quantityProduct <= 1) return;
    setQuantityProduct((prev) => prev - 1);
  };
  return (
    <div className="flex items-center mt-2">
      <span className="text-[1.1rem]  font-bold">Số lượng</span>
      <div className="ml-5">
        <ul className="flex items-center gap-2 border  cursor-pointer ">
          <li onClick={DiscountProduct} className="px-2 text-[1.5rem]">
            -
          </li>
          <li className=" border-l border-r px-4 py-[5px] w-[46.5px]  font-bold">
            {quantityProduct}
          </li>
          <li onClick={IncreaseProduct} className="px-2 text-[1.5rem]">
            +
          </li>
        </ul>
      </div>
    </div>
  );
}
