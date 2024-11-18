import React, { useEffect } from "react";
import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useAuth } from "../context/Context";
import { apiProduct } from "../callApi";
export default function ImageProduct(props) {
  const { idProduct } = props;
  const [imageProduct, setImageProduct] = useState([]);
  const { changeImage } = useAuth();
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const handleGetImage = async () => {
      const products = await apiProduct();
      const dataIdProduct = products.find(
        (product) => product._id === idProduct
      );
      setImageProduct(dataIdProduct.image);
    };
    handleGetImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAcitveIMage = (i) => {
    setCurrentIndex(i);
  };
  const handlePrevList = () => {
    const prevSale = document.getElementById("imgProduct");
    prevSale.scrollLeft = prevSale.scrollLeft - 1000;
  };
  const handleNextList = () => {
    const prevSale = document.getElementById("imgProduct");
    prevSale.scrollLeft = prevSale.scrollLeft + 1000;
  };
  return (
    <div className=" col-span-1">
      {imageProduct.length > 0 ? (
        <div
          className="     bg-contain bg-no-repeat    duration-700 ease-in-out w-[95%] h-[504px] object-contain border rounded-md mx-5 my-5 "
          style={{
            backgroundImage: `url( ${
              changeImage === true
                ? imageProduct[currentIndex].image1
                : imageProduct[currentIndex].image2
            })`,
          }}
        ></div>
      ) : (
        <div
          className="     bg-contain bg-no-repeat    duration-700 ease-in-out w-[95%] h-[504px] object-contain border rounded-md mx-5 my-5 "
          style={{
            backgroundImage: `url( ${changeImage === true ? "" : ""})`,
          }}
        ></div>
      )}

      <div className=" relative w-[95%] bg-white  mx-5">
        <ul
          id="imgProduct"
          className="flex items-center gap-4   overflow-x-scroll scroll-smooth  whitespace-nowrap px-1"
          style={{ overflow: "hidden" }}
        >
          <BiChevronLeft
            onClick={handlePrevList}
            className=" absolute left-[-18px]  text-[1.3rem] rounded-full w-7 h-7 my-1 mx-1  border-slate-300 border  bg-white  text-gray-500 "
          />
          {imageProduct.map((img, i) => {
            return (
              <li
                key={i}
                className="  border-2   rounded cursor-pointer hover:border-violet   duration-700 ease-in-out"
              >
                <nav className="w-[65px] h-[65px] border  gap-1 my-1 mx-1 ">
                  {imageProduct.length > 0 ? (
                    <img
                      alt=""
                      src={changeImage === true ? img.image1 : img.image2}
                      onClick={() => handleAcitveIMage(i)}
                    />
                  ) : (
                    <img
                      alt=""
                      src={changeImage === true ? "" : " "}
                      onClick={() => handleAcitveIMage(i)}
                    />
                  )}
                </nav>
              </li>
            );
          })}

          <BiChevronRight
            onClick={handleNextList}
            className="absolute right-[-17px]  text-[1.3rem] rounded-full w-7 h-7 my-1 mx-1  border-slate-300 border  bg-white  text-gray-500 cursor-pointer "
          />
        </ul>
      </div>
    </div>
  );
}
