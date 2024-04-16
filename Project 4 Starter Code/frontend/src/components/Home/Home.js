import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import axios from "axios";
import "./Home.css";
const Home = () => {
  const [massage, setMassage] = useState("");
  const { token } = useContext(UserContext);
  const navigate = useNavigate();
  const [categories, setCategories] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/categories/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        setCategories(result.data.categories);
      })
      .catch((error) => {
        setMassage(error.response.data.message);
      });
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url(https://www.yorku.ca/foodservices/wp-content/uploads/sites/50/2022/09/Copy-of-Diet.png)",
          height: "500px",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          alignItems: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="Home">
        {categories &&
          categories.map((categories, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  navigate(`/Product/${categories._id}`);
                }}
                style={{
                  backgroundImage: `url(${categories.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  width: "250px",
                  height: "250px",
                }}
              >
                {categories.name}
              </div>
            );
          })}{" "}
      </div>
    </div>
  );
};

export default Home;
