/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
export const apiProduct = async () => {
  try {
    const response = await axios.get("http://localhost:3001/product");
    return response.data.data.products;
  } catch (error) {
    if (!error.response) {
      console.error("Error response:", error.response);
    } else {
      console.error("Network error:", error);
    }
  }
};

export const apiProductFake = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    console.log(response.data)
    return response.data;
  } catch (error) {
    if (!error.response) {
      console.error("Error response:", error.response);
    } else {
      console.error("Network error:", error);
    }
  }
};
