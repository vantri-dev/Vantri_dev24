import React, { useEffect } from "react";
import { createContext, useContext } from "react";
import { useState } from "react";
import { auth } from "../firebase/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

const AuthProvider = createContext();
export function useAuth() {
  return useContext(AuthProvider);
}
export function useProfile() {
  return useContext(useProfile);
}
export function Context({ children }) {
  //Auth
  const [currentUser, setcurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [, setError] = useState("");
  //Get FilterProduct
  const [filterProduct, setFilterProduct] = useState([]);
  //Get Change Img
  const [changeImage, setChangeImage] = useState(null);

  //Handle GetProduct Current
  const [productCurrent, setProductCurrent] = useState([]);
  //Get Handle Product
  const [deleteProduct, setDeleteProduct] = useState([]);
  //Cart Product
  const GetProductCart = JSON.parse(localStorage.getItem("productCart" || []));
  const [cartProduct, setCartProduct] = useState(
    GetProductCart !== null ? GetProductCart : []
  );
  //HandleGetProductId
  const [productId, setProductId] = useState([]);
  //Handle Get CheckOut
  const [checkOut, setCheckOut] = useState([]);
  //Get Price Product
  const [priceProduct, setPriceProduct] = useState(0);
  //Check Order Product
  const [checkOrderProduct, setCheckOrderProduct] = useState(false);
  const [dataProductOrder, setDataProductOrder] = useState([]);
  //Quantity Product
  const [quantityProduct, setQuantityProduct] = useState(0);
  //Check Buy Product
  const [checkBuyId, setCheckBuyId] = useState(false);
  //Is Loading
  const [isLoading, setIsLoading] = useState(null);
  //Check Success Order
  const [checkSuccessOrder, setCheckSuccessOrder] = useState(false);
  //Get Filter Product
  const [filterProductCheckBox, setFilterProductCheckBox] = useState([])
  const [setDirectadd, direct] = useState(false);
  function signUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  function signIn(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  const hanldeSignOut = async () => {
    try {
      setError("");
      await auth.signOut();
    } catch (error) {
      setError("Fail To SignOut");
    }
  };
  function ForgotPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function handleLoginGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }
  function hanldeLoginFacebook() {
    const provider = new FacebookAuthProvider();
    return signInWithPopup(auth, provider);
  }
  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      setLoading(false);
      setcurrentUser(user);
    });
  }, []);
  //CountDown
  function CountDown() {
    const time = "Mar 09 2025 23:59:59";
    return time;
  }

  //Get Filter Product
  function getFilterProductContext(data) {
    setFilterProduct(data);
  }
  //Get Change Img
  function getChangeImage(data) {
    setChangeImage(data);
  }

  //Handle Product Current
  function handleProductCurrent(product) {
    setProductCurrent(product);
  }
  function getDeleteProduct(product) {
    setDeleteProduct(product);
  }
  function handleAddCart(product) {
    setCartProduct(product);
  }
  localStorage.setItem("productCart", JSON.stringify(cartProduct));
  //Get Delete Product
  function deleteProductCart(id) {
    const deleteCart = cartProduct.filter((item) => {
      return item.id !== id;
    });
    setCartProduct(deleteCart);
  }

  function handleGetProductId(product) {
    setProductId(product);
  }
  function handleCheckOut(data) {
    setCheckOut(data);
  }

  //Get Price Product
  function getPriceProduct(data) {
    setPriceProduct(data);
  }

  //Check Order Product
  function getCheckOrder(isCheck, dataProduct) {
    setCheckOrderProduct(isCheck);
    setDataProductOrder(dataProduct);
  }
  function quantityProductOrder(quantity) {
    setQuantityProduct(quantity);
  }
  function checkBuyProductId(check) {
    setCheckBuyId(check);
  }
  function isLoadingData(bool) {
    setIsLoading(bool);
  }
  function isCheckSuccess(check) {
    setCheckSuccessOrder(check);
  }

  function directAddProduct(isDirect) {
    setDirectadd(isDirect);
  }
  function handleGetCheckFilterProduct(product){
    setFilterProductCheckBox(product);
  }
  console.log(filterProductCheckBox)
  const value = {
    //Auth
    currentUser,
    signIn,
    signUp,
    hanldeSignOut,
    ForgotPassword,
    handleLoginGoogle,
    hanldeLoginFacebook,
    //CountDown
    CountDown,
    //Get filter
    getFilterProductContext,
    filterProduct,
    //Get Change Img
    getChangeImage,
    changeImage,

    //HandleProductCurrent
    handleProductCurrent,
    productCurrent,

    //Get Delete Product
    getDeleteProduct,
    deleteProduct,
    handleAddCart,
    cartProduct,
    //Get Id Cart
    deleteProductCart,
    //handleGetProductId
    handleGetProductId,
    productId,
    //handleCheckOut
    handleCheckOut,
    checkOut,
    //Price Product
    getPriceProduct,
    priceProduct,
    //Check Order
    getCheckOrder,
    checkOrderProduct,
    dataProductOrder,
    //QuantityProductOrder
    quantityProductOrder,
    quantityProduct,
    //Check Buy
    checkBuyProductId,
    checkBuyId,
    //Loading Data
    isLoadingData,
    isLoading,
    //Check success
    isCheckSuccess,
    checkSuccessOrder,
    directAddProduct,
    direct,
    //Get Checkbox Filter
    handleGetCheckFilterProduct,
    filterProductCheckBox
  };
  return (
    <AuthProvider.Provider value={value}>
      {!loading && children}
    </AuthProvider.Provider>
  );
}
