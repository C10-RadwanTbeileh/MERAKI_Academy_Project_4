import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import axios from "axios";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [massage, setMassage] = useState("");
  const { token, userId } = useContext(UserContext);
  const [product1, setProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/cart/byUserId/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        setProduct(result.data.product.products);
        // console.log(result.data.product.products);
        // console.log(result);
      })
      .catch((error) => {
        setMassage(error.response.data.message);
        // console.log(error);
      });
  }, []);
  // console.log(product)
  return (
    <div>
      {massage}

      {product1 &&
        product1.map((product, i) => {
          return (
            <div key={i} className="Product">
              <div>
                <img
                  src={`${product.product.image}`}
                  style={{ width: "200px", height: "200px" }}
                />
              </div>

              <div>
                <p>quantity : {product.quantity}</p>
                <p>price : {product.price}</p>

                <button
                  onClick={() => {
                    axios
                      .delete(
                        `http://localhost:5000/cart/delete/${product._id}`,
                        {
                          headers: { Authorization: `Bearer ${token}` },
                        }
                      )
                      .then((result) => {
                        console.log(result);
                        
                        let prod = product1.filter((pro) => {
                          pro._id !== product._id;
                        });
                        setProduct(prod);

                        navigate("/Cart");
                      })
                      .catch((error) => {
                        setMassage(error.response.data.message);
                      });
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Cart;
