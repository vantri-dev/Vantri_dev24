import axios from "axios";
export const apiProduct =async ()=>{
      try {       
        const response = await axios.get("http://localhost:3001/product");
        return  response.data.data.products;
      } catch (error) {
        if (!error.response) {
          console.error("Error response:", error.response);
        } else {
          console.error("Network error:", error);
        }
      }
}