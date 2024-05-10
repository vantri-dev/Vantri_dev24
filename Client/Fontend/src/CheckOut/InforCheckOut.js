/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState, useRef } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import Wrapper from "../components/Popper/Wrapper";
import {  FaUserEdit } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { MdLocalShipping, MdPayment } from "react-icons/md";
import { useAuth } from "../context/Context";
import {useNavigate} from 'react-router-dom'

export default function InforCheckOut() {
  const {  cartProduct,priceProduct,getCheckOrder,checkOut } = useAuth();
  const toggleContainerPaypal = useRef();
  const toggleContainerPaypalSelect = useRef();
  const [checkDirect, setCheckdirect] = useState(true);
  const [hiddenPayPal, setHiddenPayPal] = useState(false);
  const [checkOutSuccess, setCheckOutSuccess] = useState(false);
  const [changeInputPaypal, setChangeInputPaypal] = useState(false);
  
   const [sumProduct,setSumProduct]=useState(0)
  const [error, setError] = useState(null);
  const routerOrder = useNavigate()
  const handleCheckDirect = () => {
    setCheckdirect(true);
  };
  const handleCheckPaypal = () => {
    setCheckdirect(false);
  };
  const closePayPalCheckOut = () => {
    setHiddenPayPal(false);
  };
  const handlePaySelectChange = () => {
    setChangeInputPaypal(true);
    if(changeInputPaypal){
      setChangeInputPaypal(false);
    }
  };
  useEffect(() => {
    let hiddenUser = (e) => {
      if (
        toggleContainerPaypal.current &&
        !toggleContainerPaypal.current.contains(e.target) &&
        !toggleContainerPaypalSelect.current.contains(e.target)
      ) {
        setHiddenPayPal(false);
      }
    };
    document.addEventListener("mousedown", hiddenUser);
    return () => {
      document.removeEventListener("mousedown", hiddenUser);
    };
  }, []);

  //Paypal
  const handlePayPaypal = () => {
    if (changeInputPaypal === true) {
      setHiddenPayPal(true);
    } else {
      setHiddenPayPal(false);
      getCheckOrder(true,cartProduct)
      routerOrder('/profile')
    }
  };
  const handleApprove = () => {
    setCheckOutSuccess(true);
  };
  useEffect(() => {
    if (checkOutSuccess) {
      //thanh cong
      setHiddenPayPal(false);
    }
  }, [checkOutSuccess]);

  const onCreateOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: priceProduct === 0 ? handleOnError() : priceProduct,
          },
        },
      ],
    });
  };

  const onApproveOrder = (data, actions) => {
    return actions.order.capture().then((details) => {

      handleApprove(data.orderID);
    });
  };
  const handleOnError = (err) => {
    setError(err);
  };
  if (error) {
    alert(error);
  }

  const handleOnClick = (data, actions) => {
    const hasAlreadyBoughtCourse = false;
    if (hasAlreadyBoughtCourse) {
      return actions.reject();
    } else {
      return actions.resolve();
    }
  };

  //Sum product
   useEffect(()=>{
    const handleSumProduct = priceProduct - 3
    setSumProduct(handleSumProduct)
   },[sumProduct])
   console.log(checkOut)
  return (
    <div className="grid grid-cols-6 gap-3  px-[105px] mt-[100px] ">
      <div
        ref={toggleContainerPaypal}
        className={
          hiddenPayPal === true
            ? "  absolute cursor-pointer px-2  border bg-[#fff] py-4 rounded top-[20%] left-[34.2%] w-[35%]  "
            : "hidden"
        }
      >
        <IoMdClose
          className=" absolute right-1 top-1 text-[1.4rem] cursor-pointer"
          onClick={closePayPalCheckOut}
        />

        <PayPalButtons
          className="w-full py-5 px-2"
          style={{
            layout: "vertical",
          }}
          createOrder={(data, actions) => onCreateOrder(data, actions)}
          onClick={(data, actions) => handleOnClick(data, actions)}
          onApprove={(data, actions) => onApproveOrder(data, actions)}
          onError={(err) => {
            handleOnError(err);
          }}
        />
      </div>
      <div className=" col-span-4">
        <Wrapper>
          <div className="px-5 py-4">
            <div className="flex   items-center pb-3">
              <FaUserEdit className="text-[1.55rem]    mx-1   text-violet" />
              <span className="text-[1.15rem]  text-black   font-bold">
                Thông tin khách hàng
              </span>
            </div>

            <div className="ml-5">
              <div className="pt-1 pb-[2px]">
                <p>
                  <span className=" text-[1.1rem] font-bold text-black">
                    Tên:
                  </span>
                  <span className=" text-[#828282]  font-medium  border-r-[1px] pr-2 ml-1">
                    {checkOut.name}
                  </span>
                  <span className="text-[1.09rem] font-bold text-black mx-2">
                    SĐT:
                    <span className=" text-[#828282]  font-medium   ml-1 ">
                      {checkOut.number}
                    </span>
                  </span>
                </p>
              </div>

              <p className="text-[1.1rem] font-bold text-black pb-[2px]">
                Gmail:
                <span className=" text-[#828282]  font-medium mx-1">
                  {checkOut.email}
                </span>
              </p>
              <p className="text-[1.1rem] font-bold text-black">
                Địa chỉ nhận hàng:
                <span className=" text-[#828282]  font-medium mx-1">
                  {checkOut.adress}
                </span>
              </p>
            </div>
          </div>
        </Wrapper>
        <div className="mt-[12px]">
          <Wrapper>
            <div className="px-5 py-4">
              <div className="flex   items-center pb-3  ">
                <MdLocalShipping className="text-[1.55rem]    mx-1   text-violet" />
                <span className="text-[1.15rem]  text-black   font-bold">
                  Phương thức giao hàng
                </span>
              </div>
              <div>
                <div className=" cursor-pointer">
                  <label className="flex items-center ml-5 cursor-pointer">
                    <span className="text-[1.1rem] font-bold text-black">
                      <input
                        type="radio"
                        className="mr-1 "
                        name="move"
                        id="1"
                      />
                      Từ thứ 2 đến thứ 6 ( 8h-9h)
                      <p className="text-[#828282] ml-10 font-normal  text-base">
                        Phù hợp với địa chỉ văn phòng/cơ quan
                      </p>
                    </span>
                  </label>
                </div>
                <div className=" cursor-pointer mt-2">
                  <label className="flex items-center ml-5 cursor-pointer">
                    <span className="text-[1.1rem] font-bold text-black">
                      <input
                        type="radio"
                        className="mr-1 "
                        name="move"
                        defaultChecked={true}
                      />
                      Cả tuần (trừ CN & lễ)
                      <p className="text-[#828282] ml-10 font-normal  text-base">
                        Phù hợp với địa chỉ nhà riêng (8h - 18h )
                      </p>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
        <div className="mt-[12px]">
          <Wrapper>
            <div className="px-5 py-4 mb-2">
              <div className="flex   items-center pb-3  ">
                <MdPayment className="text-[1.55rem]    mx-1   text-violet" />
                <span className="text-[1.15rem]  text-black   font-bold">
                  Phương thức thanh toán
                </span>
              </div>
              <div>
                <div
                  className={
                    checkDirect === true
                      ? "cursor-pointer py-3 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] mb-3  rounded bg-[#fff]"
                      : "cursor-pointer  py-3 mb-3 bg-[#f2f3f4]  rounded"
                  }
                >
                  <label className="flex items-center ml-5 cursor-pointer">
                    <span
                      className="text-[1.1rem] font-bold text-black"
                      onClick={handleCheckDirect}
                    >
                      <input
                        type="radio"
                        className="mr-1 "
                        name="check"
                        id="1"
                        defaultChecked={true}
                        onChange={handlePaySelectChange}

                      />
                      Thanh toán khi nhận hàng
                    </span>
                  </label>
                </div>
                <div
                  className={
                    checkDirect === false
                      ? "cursor-pointer py-3 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]  rounded bg-[#fff]"
                      : "cursor-pointer  py-3 bg-[#f2f3f4]  rounded"
                  }
                >
                  <label className="flex items-center ml-5 cursor-pointer">
                    <span
                      className="text-[1.1rem] font-bold text-black"
                      onClick={handleCheckPaypal}
                    >
                      <input
                        type="radio"
                        className="mr-1 "
                        name="check"
                        onChange={handlePaySelectChange}
                      />
                      Thanh toán bằng Paypal
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
      <div className="col-span-2">
        <Wrapper>
          <div className="flex   items-center pb-3  ">
            <MdPayment className="text-[1.55rem]    mx-1   text-violet" />
            <span className="text-[1.15rem]  text-black   font-bold">
              Thông tin đơn hàng
            </span>
          </div>
          <div className="   max-h-[300px] overflow-x-hidden  overflow-scroll no-scrollbar ">
            {
              cartProduct.map((item,index)=>{
                return (<div key={index} className="flex items-center    justify-items-end  px-2 w-full gap-2 py-4  ">
                <div className="w-[50px] h-[50px]">
                  <img
                    src="https://media3.scdn.vn/img4/2022/11_18/eKh9c2zrReLhFgqPwa9n_simg_02d57e_50x50_maxb.jpg"
                    alt=""
                    className="w-[50px] h-[50px] "
                  />
                </div>
                <div className="w-[90%]">
                  <span className="text-[0.9rem] line-clamp-1   font-sans ">
                   {item.body}
                  </span>
                  <div className="flex items-center   justify-between">
                    <p className="text-[0.95rem] font-black   text-violet">
            {item.id.toFixed(3)}
                      <span className="px-1 text-[0.85rem] line-through text-[#828282] italic   font-light">
                        9.00đ
                      </span>
                    </p>
                    <span className="text-[0.95rem] font-black ">x1</span>
                  </div>
                </div>
              </div>)
              })
            }
            
          </div>
          <div className="flex items-center justify-between   mx-1  py-1  pb-2">
            <div className="flex items-center ">
              <CiDiscount1 className="text-[1.5rem] mr-1 text-violet" />
              <span className="text-[0.99rem]  text-black   font-bold">
                Mã giảm giá
              </span>
            </div>
            <span className="text-[#0f62fe]  font-medium text-[0.9rem]">
              Chọn/nhập mã
            </span>
          </div>
        </Wrapper>

        <div className=" mt-[12px]">
          <Wrapper>
            <div className="mx-1">
              <div className="  border-b">
                <div className="flex item-center justify-between py-1">
                  <p className="text-[#3f4b53] text-[1rem]">Tiền hàng</p>
                  <p className="text-[0.95rem]  font-bold">{priceProduct.toFixed(3)}đ</p>
                </div>

                <div className="flex item-center justify-between py-[2px]">
                  <p className="text-[#3f4b53] text-[1rem]">Tiền vận chuyển</p>
                  <p className="text-[0.95rem]  font-bold">3.000đ</p>
                </div>
              </div>

              <div className="flex item-center justify-between py-1">
                <p>Tổng thanh toán</p>
                <p className="text-[0.95rem]  font-bold">{sumProduct.toFixed(3)}đ</p>
              </div>
              <button
                  ref={toggleContainerPaypalSelect}

                onClick={handlePayPaypal}
                className=" cursor-pointer  relative inline-flex  w-full p-[1.75px] mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
              >
                <span className="  w-full relative px-5 py-[13px] transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-[1.15rem]  font-sans">
                  Thanh toán
                </span>
              </button>
            </div>
          </Wrapper>
        </div>
      </div>
    </div>
  );
}
