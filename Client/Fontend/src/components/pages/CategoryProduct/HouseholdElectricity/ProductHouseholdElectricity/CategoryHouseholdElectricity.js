import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { apiProductFake } from "../../../../../callApi";
import { useAuth } from "../../../../../context/Context";
export default function CategoryHouseholdElectricity() {
  const [products, setProducts] = useState([]);
  const [filterCheck, setFilterCheck] = useState([]);
  const { handleGetCheckFilterProduct } = useAuth();
  const [valuecheckWhere, setValueCheckWhereToBuy] = useState("");
  const [valuecheckShip, setvalueCheckShip] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      apiProductFake().then((data) => {
        if (!data) {
          setProducts([]);
        } else {
          setProducts(data);
        }
      });
    };
    fetchData();
  }, []);
  const handleCheckToWhere = (e) => {
    setValueCheckWhereToBuy(e.target.value);
  };
  const handleGetCheckShip = (e) => {
    setvalueCheckShip(e.target.value);
  };
  const filterProduct = () => {
    if (valuecheckShip || setValueCheckWhereToBuy) {
      const getFilterCheck = products.filter((product) => {
        const filterNameProduct = product.name
          .toLowerCase()
          .includes(valuecheckShip.toLowerCase());
        const filterWhereToBuy =
          product.email.toLowerCase().includes(valuecheckWhere.toLowerCase()) ||
          valuecheckWhere === "";
        return filterNameProduct && filterWhereToBuy;
      });
      console.log(getFilterCheck);
      if (getFilterCheck.length > 0) {
        const count = getFilterCheck.filter((item) =>
          item.email.includes(".ca")
        );
        console.log(count);
      }
      setFilterCheck(() => [...getFilterCheck]);
    } else {
      setFilterCheck(products);
    }
  };
  useEffect(() => {
    filterProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valuecheckShip, valuecheckWhere]);
  useEffect(() => {
    handleGetCheckFilterProduct(filterCheck);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterCheck]);
  return (
    <div className="py-5 px-5">
      <div className="flex items-center">
        <AiOutlineMenu className="text-[1.17rem]" />
        <span className=" font-black font-mono text-[1.1rem] pl-[6px]">
          Danh mục
        </span>
      </div>

      <ul className="flex flex-col items-start justify-start">
        <li className="w-full  pl-4 py-5 cursor-pointer">
          <span className="text-[1rem]   font-black">Thương hiệu</span>
          <div className="flex items-center justify-start pl-5 py-2 hover:bg-slate-100  rounded">
            <input
              type="checkbox"
              value="la"
              id="Apple"
              onChange={handleGetCheckShip}
            />
            <label htmlFor="" className="ml-2 text-textword text-[1.05rem]">
              Máy hút mùi
            </label>
          </div>
          <div className="flex items-center justify-start pl-5 py-2 hover:bg-slate-100  rounded">
            <input type="checkbox" />
            <label htmlFor="" className="ml-2 text-textword text-[1.05rem]">
              Bếp các loại
            </label>
          </div>
          <div className="flex items-center justify-start pl-5 py-2 hover:bg-slate-100  rounded">
            <input type="checkbox" />
            <label htmlFor="" className="ml-2 text-textword text-[1.05rem] ">
            Máy làm kem
            </label>
          </div>
          <div className="flex items-center justify-start pl-5 py-2 hover:bg-slate-100  rounded">
            <input type="checkbox" />
            <label htmlFor="" className="ml-2 text-textword text-[1.05rem]">
              Máy đánh trứng
            </label>
          </div>
          <div className="flex items-center justify-start pl-5 py-2 hover:bg-slate-100  rounded">
            <input type="checkbox" />
            <label htmlFor="" className="ml-2 text-textword text-[1.05rem]">
           Lò vi sóng
            </label>
          </div>
        </li>
        <li className="w-full  pl-4 py-5 cursor-pointer">
          <span className="text-[1rem]   font-black">Nơi bán</span>
          <div className="flex items-center justify-start pl-5 py-2 hover:bg-slate-100  rounded">
            <input
              type="checkbox"
              value=".ca"
              id="HCM"
              onChange={handleCheckToWhere}
            />
            <label htmlFor="" className="ml-2 text-textword text-[1.05rem]">
              Hồ Chí Minh
            </label>
          </div>
          <div className="flex items-center justify-start pl-5 py-2 hover:bg-slate-100  rounded">
            <input type="checkbox" />
            <label htmlFor="" className="ml-2 text-textword text-[1.05rem]">
              Hà Nội
            </label>
          </div>
          <div className="flex items-center justify-start pl-5 py-2 hover:bg-slate-100  rounded">
            <input type="checkbox" />
            <label htmlFor="" className="ml-2 text-textword text-[1.05rem] ">
              Đà Nẵng
            </label>
          </div>
          <div className="flex items-center justify-start pl-5 py-2 hover:bg-slate-100  rounded">
            <input type="checkbox" />
            <label htmlFor="" className="ml-2 text-textword text-[1.05rem]">
              Cà Mau
            </label>
          </div>
          <div className="flex items-center justify-start pl-5 py-2 hover:bg-slate-100  rounded">
            <input type="checkbox" />
            <label htmlFor="" className="ml-2 text-textword text-[1.05rem]">
              Thanh Hóa
            </label>
          </div>
        </li>
        <li className="w-full  pl-4 py-5 cursor-pointer">
          <span className="text-[1rem]   font-black">Đơn Vị Vận Chuyển</span>
          <div className="flex items-center justify-start pl-5 py-2 hover:bg-slate-100  rounded">
            <input
              type="checkbox"
              value="qui"
              id="hoatoc"
              onChange={handleGetCheckShip}
            />
            <label htmlFor="" className="ml-2 text-textword text-[1.05rem]">
              Hỏa Tốc
            </label>
          </div>
          <div className="flex items-center justify-start pl-5 py-2 hover:bg-slate-100  rounded">
            <input type="checkbox" />
            <label htmlFor="" className="ml-2 text-textword text-[1.05rem]">
              Nhanh
            </label>
          </div>
          <div className="flex items-center justify-start pl-5 py-2 hover:bg-slate-100  rounded">
            <input type="checkbox" />
            <label htmlFor="" className="ml-2 text-textword text-[1.05rem] ">
              Tiết Kiệm
            </label>
          </div>
        </li>
        <li className="w-full  pl-4 py-5 cursor-pointer">
          <span className="text-[1rem]   font-black">Loại Shop</span>
          <div className="flex items-center justify-start pl-5 py-2 hover:bg-slate-100  rounded">
            <input
              type="checkbox"
              value="placeat"
              id="Mall"
              onChange={handleGetCheckShip}
            />
            <label htmlFor="" className="ml-2 text-textword text-[1.05rem]">
              Shop Mall
            </label>
          </div>
          <div className="flex items-center justify-start pl-5 py-2 hover:bg-slate-100  rounded">
            <input
              type="checkbox"
              value="deserunt"
              id="Mall"
              onChange={handleGetCheckShip}
            />
            <label htmlFor="" className="ml-2 text-textword text-[1.05rem]">
              Shop+
            </label>
          </div>
          <div className="flex items-center justify-start pl-5 py-2 hover:bg-slate-100  rounded">
            <input type="checkbox" />
            <label htmlFor="" className="ml-2 text-textword text-[1.05rem] ">
              Shop Tự Giao
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
}
