import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const Login = () => {
  const [massage, setMassage] = useState("");
  const navigate = useNavigate();
  const { setIsLoggedIn, setToken } = useContext(UserContext);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
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
              navigate("/Home");
              setIsLoggedIn(true);
              setToken(result.data.token);
              localStorage.setItem("token", result.data.token);
            })
            .catch((error) => {
              setMassage(error);
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
