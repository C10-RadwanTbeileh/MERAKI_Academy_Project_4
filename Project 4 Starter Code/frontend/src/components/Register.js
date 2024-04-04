import React from "react";

const Register = () => {

    const [FirstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [country, setCountry] = useState();
    const [age, setAge] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
  
    return (
      <div>
        Register
        <input
          type="text"
          placeholder="FirstName"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="lastName"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="phoneNumber"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Country"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={() => {
  
  
  
  
  
  
  
  
  
  
  
  
        }}> Register </button>
        {massage}
      </div>
    );
  
};

export default Register;
