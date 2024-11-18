/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiProduct } from "../callApi";
export default function DescriptionProduct(props) {
  const [descriptionProduct, setDescriptionProduct] = useState({});
  const [imageDescription, setImageDescription] = useState([]);
  const { idProduct } = props;
  useEffect(() => {
    const handleGetDescriptionProduct = async () => {
      const products = await apiProduct();
      const dataIdProduct = products.find(
        (product) => product._id === idProduct
      );
      const desProduct = dataIdProduct.detailsproducts;
      desProduct.map((item) => {
        const data = item.content.description;
        setDescriptionProduct(data);
      });
    };
    handleGetDescriptionProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [hiidenContext, setHiddenContext] = useState(false);
  const handleHiddenContext = () => {
    setHiddenContext(!hiidenContext);
    const dataImg = descriptionProduct.img;

    setImageDescription(dataImg);
  };
  return (
    <div className=" bg-slate-100">
      <div className=" bg-white ">
        <div className="px-5 py-5">
          <span className="text-[1.1rem]  font-light  text-slate-500 uppercase">
            Chi tiet san pham
          </span>
        </div>
        <div className=" px-10 py-2    bg-white   ">
          <span>
            <span
              className={
                hiidenContext === true
                  ? "block"
                  : " my-2 text-opacity-75 text-textword"
              }
            >
              {descriptionProduct.p1}
            </span>
            <span
              className={
                hiidenContext === true
                  ? "block"
                  : " text-opacity-50 text-textword"
              }
            >
              {descriptionProduct.p2}
            </span>
          </span>
        </div>

        <div
          className={
            hiidenContext === true
              ? "hidden"
              : "flex items-center justify-center -translate-y-[30px]"
          }
          onClick={handleHiddenContext}
        >
          <button className="flex items-center text-[1.15rem]  rounded py-2 px-10  bg-violet text-white    bg-gradient-to-t  from-[#efc4ef] cursor-pointer">
            Xem thêm
          </button>
        </div>

        <div className={hiidenContext === true ? "block" : "hidden"}>
          {imageDescription.map((item, index) => {
            return (
              <img
                key={index}
                className="   object-contain w-full mb-2 "
                alt=""
                src={item}
              />
            );
          })}

          <div className="px-10 py-2">
            <span className=" text-[1rem] font-sans  font-semibold ">
              <p className="text-[0.95rem]  font-thin">
                Truy cập:
                <Link
                  to={descriptionProduct.linkDescription}
                  className=" text-[0.9rem] font-thin text-blue-700"
                >
                  {descriptionProduct.linkDescription}
                </Link>
              </p>
            </span>
            <p className="mb-2">{descriptionProduct.p3}</p>
          </div>
          <div
            className={
              hiidenContext === false
                ? "hiden"
                : "flex items-center justify-center py-5 "
            }
            onClick={handleHiddenContext}
          >
            <button className="flex items-center text-[1.15rem]  rounded py-2 px-10   bg-fuchsia-300 text-white   ">
              Thu gọn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
