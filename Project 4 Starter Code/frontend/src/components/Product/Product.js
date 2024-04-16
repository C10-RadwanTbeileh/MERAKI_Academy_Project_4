import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./Product.css";
const Product = () => {

  const [massage, setMassage] = useState("");
  const [product, setProducts] = useState([]);
  const { token, userId } = useContext(UserContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [productID, setProduct_id] = useState();
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [checkCart, setCheckCart] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/cart/byUserId/${userId}`)
      .then((result) => {
        setCheckCart(result.data.product.products);
      })
      .catch((error) => {
        setMassage(error.response.data.message);
      });
  }, []);

  useEffect(() => {

    axios
      .get(`http://localhost:5000/product/byCategories/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        setProducts(result.data.product);
        
      })
      .catch((error) => {
        setMassage(error.response.data.message);
        
      });
  }, []);

  return (
    <div>
      {massage}

      {product &&
        product.map((product, i) => {
          return (
            <div key={i} className="Product">
              <div>
                <img
                  src={`${product.image}`}
                  style={{ width: "200px", height: "200px" }}
                />
              </div>

              <div className="description">
                <p>Title : {product.title}</p>
                <p>Price:{product.price} $</p>
                <p>Availability : {`${product.availability}`}</p>
                <p>Description : {product.description}</p>
                <p>Size : {product.size}</p>
                <p>Categories : {`${product.categoriesId.name}`}</p>

                <button
                  onClick={() => {
                    setPrice(product.price);
                    if (
                      !checkCart.find(
                        (element) => element.product._id == product._id
                      )
                    ) {
                      axios
                        .put(
                          "http://localhost:5000/cart/update",
                          {
                            product: product._id,
                            price:product.price
                          },
                          { headers: { Authorization: `Bearer ${token}` } }
                        )
                        .then((result) => {
                          setProduct_id(result.data.products._id);
                          navigate("/cart");
                        })
                        .catch((error) => {
                          setMassage(error);
                        });
                    } else {
                      axios
                        .put(
                          "http://localhost:5000/cart/updateQuantity",
                          {
                            productID: product._id,
                            quantity: quantity + 1,
                            price: price + product.price,
                          },
                          { headers: { Authorization: `Bearer ${token}` } }
                        )
                        .then((result) => {
                          setQuantity(quantity + 1);
                          setPrice( price + product.price);
                        })
                        .catch((error) => {
                          setMassage(error);
                        });
                    }
                  }}
                >
                  Add Cart
                </button>
                <button
                  onClick={() => {
                    axios
                      .put(
                        `http://localhost:5000/users/wishByUserId/${userId}`,
                        {
                          test: product._id,
                        },
                        { headers: { Authorization: `Bearer ${token}` } }
                      )
                      .then((result) => {
                        navigate("/Favorite");
                      })
                      .catch((error) => {
                        console.log(error)
                        setMassage(error);
                      });
                  }}
                >
                  WishList
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Product;
