import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import axios from "axios";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

const Product = () => {
  // product by categories
  const [massage, setMassage] = useState("");
  const [product, setProducts] = useState([]);
  const { token } = useContext(UserContext);
  const navigate = useNavigate();





  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/product/byCategories/6609ab0090bc4f9b588d2471",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((result) => {
        setProducts(result.data.product);
        console.log(result.data.product);
      })
      .catch((error) => {
        setMassage(error.response.data.message);
      });
  }, []);

  return (
    <div>
      <NavBar />
{massage}

      {product &&
        product.map((product, i) => {
          return (
            <div key={i}>
              {/* <img src=`${product.image}`/> */}
              <label>{product.title}</label>
              <label>{product.availability}</label>
              <p>{product.description}</p>
              <label>{product.size}</label>
              <label>{product.categories}</label>
            </div>
          );
        })}
    </div>
  );
};

export default Product;
