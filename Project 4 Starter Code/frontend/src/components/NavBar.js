import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="Home">
      <Link to={"/Home"}>Home</Link> || 
      <Link to={"/Login"}>LogIn</Link> || 
      <Link to={"/Register"}>Register</Link> || 
      <Link to={"/Favorite"}>Favorite</Link> || 
      <Link to={"/Cart"}>Cart</Link>
    </div>
  );
};

export default NavBar;
