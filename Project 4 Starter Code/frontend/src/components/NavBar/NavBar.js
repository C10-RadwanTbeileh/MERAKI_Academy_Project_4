import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const NavBar = () => {
  const { token, userName, setToken } = useContext(UserContext);

  return (
    <div className="Home">
      <Link to={"/Home"}>Home</Link>
      {token ? <>{userName}</> : <Link to={"/Login"}>LogIn</Link>}
      {token ? (
        <Link
          to={"/Login"}
          onClick={() => {
            localStorage.clear();
            setToken("");
          }}
        >
          logout
        </Link>
      ) : (
        <Link to={"/Register"}>Register</Link>
      )}
      <Link to={"/Favorite"}>WishList</Link>
      <Link to={"/Cart"}>Cart</Link>
    </div>
  );
};

export default NavBar;
