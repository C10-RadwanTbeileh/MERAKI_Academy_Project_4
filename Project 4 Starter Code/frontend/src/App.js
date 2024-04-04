import React, { useState, createContext } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Favorite from "./components/Favorite";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Routes, Route, Link, json } from "react-router-dom";

export const UserContext = createContext();

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <UserContext.Provider value={{ setIsLoggedIn, setToken, token }}>
        <NavBar />
        <Home />
        {/* {?:} */}
        <Routes>
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Favorite" element={<Favorite />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />

          {/* <Route path='*' element={<Com404/>} /> */}
        </Routes>
      </UserContext.Provider>
    </div>
  );
};

export default App;
