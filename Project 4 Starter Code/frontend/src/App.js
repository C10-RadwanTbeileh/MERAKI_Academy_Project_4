import React from 'react'
import "./App.css";
// components import   from 

import { Routes, Route, Link, json } from "react-router-dom";
import Cart from './components/Cart';
import Favorite from './components/Favorite';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import NavBar from './components/NavBar';
// export const UserContext = createContext();

const App = () => {
  
  const [token, setToken] = useState(localStorage.getItem("token"));

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
   <div className="App">
      <h1>Hello World!</h1>

      <UserContext.Provider value={{ setIsLoggedIn, setToken, token }}></UserContext.Provider>
<NavBar/>
<Home/>

      <Routes>
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/Favorite" element={<Favorite/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          

          {/* <Route path='*' element={<Com404/>} /> */}
        </Routes>





    </div>
  )
}

export default App
