import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import axios from "axios";
// import NavBar from "../NavBar/NavBar";
import { useNavigate, useParams } from "react-router-dom";
import "./Product.css";
const Product = () => {
  // product by categories
  const [massage, setMassage] = useState("");
  const [product, setProducts] = useState([]);
  const { token, userId } = useContext(UserContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [productID, setProduct_id] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState(1);

  const [checkCart, setCheckCart] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/cart/byUserId/${userId}`)
      .then((result) => {
        setCheckCart(result.data.product.products);
        console.log(result.data.product.products);
        //.product._id
      })
      .catch((error) => {
        setMassage(error.response.data.message);
      });
  }, []);

  useEffect(() => {
    // console.log("from product", token.userId);
    axios
      .get(`http://localhost:5000/product/byCategories/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
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

              <div>
                <p>{product.title}</p>
                <p>{product.price}</p>
                <p>{`${product.availability}`}</p>
                <p>{product.description}</p>
                <p>{product.size}</p>
                <p>{`${product.categoriesId.name}`}</p>

                <button
                  onClick={() => {
                    setPrice(product.price);
                    console.log(product._id);
                    //for *** checkCart.find(product._id)
                    console.log(
                      checkCart.find(
                        (element) => element.product._id == product._id
                      )
                    ); //array

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
                          },
                          { headers: { Authorization: `Bearer ${token}` } }
                        )
                        .then((result) => {
                          console.log(result.data.products);
                          setProduct_id(result.data.products._id);
// setPrice(result.data.products.products.price)
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
                        console.log(result.data);
                        // setProduct_id(result.data.products._id);

                        // navigate("/Favorite");
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
