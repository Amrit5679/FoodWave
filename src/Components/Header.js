import { useEffect, useState } from "react";
import FoodWave from "../Images/logo.jpeg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useOnline from "../Hooks/useOnline";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../Hooks/useAuth";
import useLocalStorage from "../Hooks/useLocalStorage";
// Title component to display logo
const Title = () => (
  <a href="/">
    <img
      className="logo"
      src={FoodWave}
      alt="FoodVilla Logo"
      title="Food Villa"
    />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  // use useState for user logged in or logged out
  const [getLocalStorage,clearLocalStorage]=useLocalStorage("user");
  const [isLoggedin, setIsLoggedin] = useAuth();

  useEffect(()=>{
    if(getLocalStorage===null){
      setIsLoggedin(false);
    }
  },[getLocalStorage]);

  const navigate= useNavigate();
  const cartItems= useSelector(store => store.cart.items);
  const isOnline = useOnline();
  const xyz= getLocalStorage?.userName;
  return (
    <div className="header">
      <Title />
      {isLoggedin && getLocalStorage?.userName && <div className="user-name">Hii {xyz}!</div>}
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">
              <span className="cartt" data-count={cartItems.length}>
                <FontAwesomeIcon icon={faShoppingCart} />
              </span>
            </Link>
          </li>
          <li>
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() =>{
                  clearLocalStorage() 
                  setIsLoggedin(false)
                }}
              >
                Logout<span className={isOnline ? "login-btn-green" : "login-btn-red"}>●</span>
              </button>
            ) : (
              <button className="login-btn" onClick={() =>{
                  navigate("/Login")
                }}
              >
                Login<span className={isOnline ? "login-btn-green" : "login-btn-red"}>●</span>
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

