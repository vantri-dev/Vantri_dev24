import React from "react";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { useAuth } from "../context/Context";
export default function ConfirmOrderProduct() {
  const { dataProductOrder } = useAuth();
  return (
    <div className="w-full  mt-3 pb-3">
      {dataProductOrder.map((item, index) => {
        return (
          <div key={index} className="py-[2px] border-b-[2px] ">
            <div className="flex items-center justify-between px-[58px] ">
              <div className="flex items-center  gap-1 py-3 cursor-pointer">
                <img
                  alt=""
                  src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltnbvc7semml7c_tn"
                  className="w-5 h-5 rounded-full  bg-cover"
                />

                <p className="text-black text-[0.7rem]  uppercase   font-body mr-2  font-medium">
                  Shop Teach
                </p>
                <button className="flex items-center text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-sm  text-center px-[6px] py-[5px]">
                  <IoChatboxEllipsesOutline />
                  <span className="text-[0.68rem] ">Chat</span>
                </button>

                <button className="flex items-center border border-1 px-[6px] py-[5px]">
                  <IoChatboxEllipsesOutline className="mr-[1px]" />
                  <span className="text-[0.68rem]">Xem shop</span>
                </button>
              </div>
              <div className="flex items-center">
                <CiDeliveryTruck className="text-[1.3rem] text-[#26aa99]" />
                <div className="border-r-2">
                  <p className="text-[#26aa99] text-[0.75rem] font-black  cursor-pointer    mx-[2px]">
                  Người bán đang chuẩn bị hàng
                  </p>
                </div>

                <p className="text-[#26aa99] text-[0.75rem] font-black cursor-pointer mx-[2px]">
                  Chờ thanh toán
                </p>
              </div>
            </div>

            <div className="px-[58px] py-2   flex items-center   justify-between">
              <div className="px-2 flex items-center ">
                <img
                  alt=""
                  src="https://media3.scdn.vn/img4/2023/07_18/ueGqKop8naSTEyjyuZ0i_simg_de2fe0_500x500_maxb.jpg"
                  className="w-[60px] h-[60px] bg-cover "
                />
                <div className="mx-2 w-[70%] ">
                  <span className="text-[0.9rem] font-black line-clamp-2">
              {item.body}
                  </span>
                  <p className="text-[0.8rem] font-black">x1</p>
                </div>
              </div>

              <div className="w-[50%]">
               
                <p className="text-[0.95rem] font-black">
                  Mã đơn hàng: <span className=" text-sky-600">#121312332</span>
                </p>
                <p className="text-[0.85rem] font-black  leading-7">
            Ngày dặt hàng
                  <span className=" text-sky-600">#121312332</span>
                </p>
                <p className="text-[1rem] mt-2">
                Thành tiền
                  <span className=" text-[violet]">:{item.id.toFixed(3)}d </span>
                </p>
        
              </div>
            </div>
            <div className="flex items-center justify-end px-[58px] pb-2">
              <button className=" border-[1.5px] px-[10px] py-[7px] rounded-sm  hover:bg-[#f0f0f0]">
                <span className="text-[0.9rem] text-[#484747] uppercase font-inter">
                 Đơn hàng đang xử lí
                </span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
