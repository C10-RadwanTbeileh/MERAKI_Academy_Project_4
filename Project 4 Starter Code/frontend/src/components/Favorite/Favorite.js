import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../App";
import axios from "axios";

const Favorite = () => {
  const [massage, setMassage] = useState("");
  const { token, userId } = useContext(UserContext);
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/userById/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        setWishList(result.data.user.wishList);
      })
      .catch((error) => {
        setMassage(error.response.data.message);
      });
  }, []);

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
                        let wishLi = wishList.filter(
                          (pro) => pro._id !== wish._id
                        );
                        setWishList(wishLi);
                      })
                      .catch((error) => {
                        setMassage(error);
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
