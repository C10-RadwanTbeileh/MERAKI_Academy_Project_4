import React, { useState, createContext } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Favorite from "./components/Favorite/Favorite";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Product from "./components/Product/Product";
import Com404 from "./components/Com404/Com404";
import { Routes, Route } from "react-router-dom";

export const UserContext = createContext();

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [userName, setUserName] = useState(localStorage.getItem("userName"));
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <UserContext.Provider
        value={{
          setIsLoggedIn,
          setToken,
          token,
          setUserName,
          userName,
          userId,
          setUserId,
        }}
      >
        <NavBar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Favorite" element={<Favorite />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Product/:id" element={<Product />} />

          <Route path="*" element={<Com404 />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
};

export default App;
