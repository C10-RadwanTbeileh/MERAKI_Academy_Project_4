import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import { useNavigate, useParams } from "react-router-dom";
import "./Product.css"
const Product = () => {
  // product by categories
  const [massage, setMassage] = useState("");
  const [product, setProducts] = useState([]);
  const { token } = useContext(UserContext);
  const navigate = useNavigate();
  const {id}=useParams();



// 
  useEffect(() => {
    console.log("from product",id);
    axios
      .get(
        `http://localhost:5000/product/byCategories/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((result) => {
        setProducts(result.data.product);
        // console.log(result.data.product);
      })
      .catch((error) => {
        setMassage(error.response.data.message);
        // console.log(error);
      });
  }, []);

  return (
    <div>
      {/* <NavBar /> */}
{massage}

      {product &&
        product.map((product, i) => {
          return (
            <div key={i} >
              <img src={`${product.image}`}/>
              <label>{product.title}</label><br></br>
              <label>{`${product.availability}`}</label>
              <p>{product.description}</p>
              <label>{product.size}</label>
              <label>{`${product.categoriesId}`}</label>
            </div>
          );
        })}
    </div>
  );
};

export default Product;
