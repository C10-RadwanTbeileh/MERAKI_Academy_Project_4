import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import "./Login.css";
const Login = () => {
  const [massage, setMassage] = useState("");
  const navigate = useNavigate();
  const { setIsLoggedIn, setToken ,setUserName,setUserId} = useContext(UserContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="Login">
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br></br>
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br></br>
      <button
        onClick={() => {
          axios
            .post("http://localhost:5000/users/login", {
              email,
              password,
            })
            .then((result) => {
              setIsLoggedIn(true);
              setToken(result.data.token);
              localStorage.setItem("token", result.data.token);
              setUserName(result.data.userName)
              setUserId(result.data.userId)
              localStorage.setItem("userId",result.data.userId)
              navigate("/Home");
            })
            .catch((error) => {
              setMassage(error);
              console.log(error);
            });
        }}
      >
        {" "}
        LogIN{" "}
      </button>
      {massage}
    </div>
  );
};

export default Login;
