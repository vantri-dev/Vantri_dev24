import cartEmty from "../../img/cartEmty.png";

import React from "react";
import { useState,useEffect  } from "react";
import ConfirmOrderProduct from "../../../ConfirmOrderProduct/ConfirmOrderProduct";
import { useAuth } from "../../../context/Context";
import { db } from "../../../firebase/firebase";
export default function Order() {
  const listOrder = [
    "Chờ xác nhận",
    "Đã xác nhận",
    "Đang vận chuyển",
    "Đã giao",
    "Đã hủy",
  ];
  const {  checkOrderProduct } = useAuth();
  const [tabs, setTabs] = useState(0);
  const [data,setData]=useState([])
   useEffect(() => {
     db.collection("order")
       .get()
       .then((querySnapshot) => {
         const newOrderData = [];
         querySnapshot.forEach((doc) => {
           // Sử dụng ID của tài liệu làm key duy nhất
           const id = doc.id;
           const data = doc.data();
           newOrderData.push({ id, ...data });
         });
         // Cập nhật dữ liệu với keys duy nhất
         setData(newOrderData);
       })
       .catch((error) => {
         console.log("Error getting documents: ", error);
       });
   }, []);
  return (
    <div className=" w-full h-screen ">
      <div className="w-full   bg-gray-100 rounded">
        <nav className="flex justify-around pt-9 border-b pb-2  ">
          {listOrder.map((item, index) => {
            return (
              <div
                onClick={() => setTabs(index)}
                key={index}
                className="cursor-pointer text-[1.07rem] font-medium"
              >
                <span
                  className={
                    tabs === index
                      ? "text-violet  "
                      : "text-textword  hover:text-violet"
                  }
                >
                  {item}
                </span>
              </div>
            );
          })}
        </nav>
        <ul>
          <li
            className={
              tabs === 0
                ? "block w-full max-h-[600px]   overflow-x-hidden  overflow-scroll no-scrollbar "
                : "hidden"
            }
          >
            {checkOrderProduct === true || data.length > 0 ? (
              <ConfirmOrderProduct />
            ) : (
              <div className="flex items-center">
                <div className=" m-auto pt-[5%]">
                  <img
                    src={cartEmty}
                    alt=""
                    className="w-[200px] h-[200px] object-contain"
                  />
                  <span className="text-[1.1rem] text-slate-600 font-medium">
                    Hiện tại chưa có đơn hàng nào
                  </span>
                </div>
              </div>
            )}
          </li>
          <li className={tabs === 1 ? "block" : "hidden"}>
            <div className="flex items-center">
              <div className=" m-auto pt-[5%]">
                <img
                  src={cartEmty}
                  alt=""
                  className="w-[200px] h-[200px] object-contain"
                />
                <span className="text-[1.1rem] text-slate-600 font-medium">
                  Hiện tại chưa có đơn hàng nào
                </span>
              </div>
            </div>
          </li>
          <li className={tabs === 2 ? "block" : "hidden"}>
            <div className="flex items-center">
              <div className=" m-auto pt-[5%]">
                <img
                  src={cartEmty}
                  alt=""
                  className="w-[200px] h-[200px] object-contain"
                />
                <span className="text-[1.1rem] text-slate-600 font-medium">
                  Hiện tại chưa có đơn hàng nào
                </span>
              </div>
            </div>
          </li>
          <li className={tabs === 3 ? "block" : "hidden"}>
            <div className="flex items-center">
              <div className=" m-auto pt-[5%]">
                <img
                  src={cartEmty}
                  alt=""
                  className="w-[200px] h-[200px] object-contain"
                />
                <span className="text-[1.1rem] text-slate-600 font-medium">
                  Hiện tại chưa có đơn hàng nào
                </span>
              </div>
            </div>
          </li>
          <li className={tabs === 4 ? "block" : "hidden"}>
            <div className="flex items-center">
              <div className=" m-auto pt-[5%]">
                <img
                  src={cartEmty}
                  alt=""
                  className="w-[200px] h-[200px] object-contain"
                />
                <span className="text-[1.1rem] text-slate-600 font-medium">
                  Hiện tại chưa có đơn hàng nào
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
