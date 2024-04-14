import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../App";
import axios from "axios";

const Favorite = () => {
  const [massage, setMassage] = useState("");
  const { token, userId } = useContext(UserContext);
  const [wishList, setWishList] = useState([]);

  // user id .wishList from db

  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/userById/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        setWishList(result.data.user.wishList);
        console.log(result.data.user.wishList);
        console.log(result.data.user);
      })
      .catch((error) => {
        setMassage(error.response.data.message);
      });
  }, []);
//   console.log(wishList);
  return (
    <div>
      {massage}
      {wishList &&
        wishList.map((wish, i) => {
          return (
            <div key={i} className="Product">
              <div>
                <img
                  src={`${wish.image}`}
                  style={{ width: "200px", height: "200px" }}
                />
              </div>

              <div>
                <p>{wish.title}</p>
                <p>{wish.price}</p>
                <p>{`${wish.availability}`}</p>
                <p>{wish.description}</p>
                <p>{wish.size}</p>
                <p>{`${wish.categoriesId.name}`}</p>
                <button
                  onClick={() => {
                    axios
                      .put(
                        `http://localhost:5000/users/upDateDeleteWish/${userId}`,
                        {
                          test: wish._id,
                        },
                        { headers: { Authorization: `Bearer ${token}` } }
                      )
                      .then((result) => {
                        console.log(result.data);
                        // let wishLi = wishList.filter((pro) => {
                        //     console.log(pro._id);
                        //     pro._id !== wish._id;
                        //   });
                        //   setWishList(wishLi);

                        // navigate("/Favorite");
                      })
                      .catch((error) => {
                        setMassage(error);
                        console.log(error);
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

export default Favorite;
