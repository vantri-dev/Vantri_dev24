/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Context";
export const AddProduct = (props) => {
  const { AddProductCart } = props;
  const [isRouter, setIsRouter] = useState(false);
  const [isRouterCheckOut, setIsRouterCheckOut] = useState(null);
  const { checkOut, currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      setIsRouter(true);
      if (Object.keys(checkOut).length === 0) {
        //khong co check  out
        setIsRouterCheckOut(false);
      } else {
        setIsRouterCheckOut(true);
      }
    } else {
      setIsRouter(false);
    }
  }, [isRouterCheckOut]);

  return (
    <div className="flex items-center  px-5 py-[15.5px] cursor-pointer ">
      {currentUser ? (
        <button
          className="flex items-center text-[1.15rem] border border-violet rounded py-3 px-10  bg-[#fdf4ff] text-violet mr-5"
          onClick={() => AddProductCart()}
        >
          <BsCartPlus className="text-[1.45rem] mx-1" />
          Thêm vào giỏ hàng
        </button>
      ) : (
        <Link to={"/signUp"}>
          <button className="flex items-center text-[1.15rem] border border-violet rounded py-3 px-10  bg-[#fdf4ff] text-violet mr-5">
            <BsCartPlus className="text-[1.45rem] mx-1" />
            Thêm vào giỏ hàng
          </button>
        </Link>
      )}

      {isRouter === true && isRouterCheckOut === true ? (
        <button
          onClick={() => AddProductCart(1)}
          className="flex items-center text-[1.15rem] border border-violet rounded py-3 px-[70px]  bg-violet text-white"
        >
          Mua ngay
        </button>
      ) : (
        <Link
          to={
            isRouter === false
              ? "/signUp"
              : "" || isRouterCheckOut === false
              ? "/checkOut"
              : "/inforCheckOut"
          }
          onClick={() => AddProductCart()}
        >
          <button className="flex items-center text-[1.15rem] border border-violet rounded py-3 px-[70px]  bg-violet text-white">
            Mua ngay
          </button>
        </Link>
      )}
    </div>
  );
};

export default AddProduct;
