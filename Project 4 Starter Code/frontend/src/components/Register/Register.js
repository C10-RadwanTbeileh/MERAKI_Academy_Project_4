import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";
const Register = () => {
  const [massage, setMassage] = useState();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phonNumber, setPhoneNumber] = useState();
  const [country, setCountry] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="Register">
      <input
        type="text"
        placeholder="FirstName"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <br></br>
      <input
        type="text"
        placeholder="lastName"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <br></br>

      <input
        type="number"
        placeholder="phoneNumber"
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
      />
      <br></br>

      <input
        type="text"
        placeholder="Country"
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      />
      <br></br>

      <input
        type="number"
        placeholder="age"
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <br></br>

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
            .post("http://localhost:5000/users/register", {
              firstName,
              lastName,
              age,
              country,
              email,
              password,
              phonNumber,
            })
            .then((result) => {
              
              setMassage(result.data.massage);
              navigate("/Login");
            })
            .catch((error) => {
              setMassage(error.response.data.message);
            });
        }}
      >
        {" "}
        Register{" "}
      </button>
      <br></br>
      {massage}
    </div>
  );
};

export default Register;
