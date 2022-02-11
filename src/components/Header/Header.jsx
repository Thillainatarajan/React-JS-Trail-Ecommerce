import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOutInitiate } from "../../redux/action";

const Header = () => {
  const { user, basket } = useSelector((state) => state.data);
  let dispatch = useDispatch();
  const handleAuth = () => {
    if (user) {
      dispatch(logOutInitiate());
    }
  };
  return (
    <div className="header">
      <div className="header__brandlogo">
        <Link to="/">
          <img
            src="../assets/images/logo/amazon-India-Logo-w-txt.png"
            alt="b-logo"
          />
        </Link>
      </div>
      {/* <div className="header__userNav">
        <div className="header__userNav__subSec header__userNav__loggedSec">
          <div>
            <LocationOnOutlinedIcon />
          </div>
          <span className="spanTxt1">Choose Your</span>
          <span className="spanTxt2">Location</span>
        </div>
      </div> */}
      <div className="header__search">
        <div className="input-group ">
          <div className="input-group-prepend">
            <button
              className="btn dropdown-toggle allSearchBtn"
              type="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              All
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
              <div role="separator" className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Separated link
              </a>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Amount (to the nearest dollar)"
          />
          <div className="input-group-append">
            <span className="input-group-text searchIcon">
              <SearchIcon />
            </span>
          </div>
        </div>
      </div>
      <div className="header__userNav">
        <Link to={`${user ? "/" : "/login"}`} className="headerLink">
          <div
            onClick={handleAuth}
            className="header__userNav__subSec header__userNav__loggedSec"
          >
            <span className="spanTxt1">
              Hello, {user ? user.email : "Guest!"}
            </span>
            <span className="spanTxt2">{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>
        <Link to="/order" className="headerLink">
          <div className="header__userNav__subSec header__userNav__orderSec">
            <span className="spanTxt1">Returns</span>
            <span className="spanTxt2">& Orders</span>
          </div>
        </Link>
        <Link to="/prime" className="headerLink">
          <div className="header__userNav__subSec header__userNav__primeSec">
            <span className="spanTxt1">Try Your</span>
            <span className="spanTxt2">Prime Offer</span>
          </div>
        </Link>
        <Link to="/checkout" className="headerLink">
          <div className="header__userNav__subSec header__userNav__cartCount">
            {/* <span className="spanTxt1">Returns</span> */}
            <span>
              <ShoppingBasketIcon />
            </span>
            <span className="productadd-count-sec">
              <span className="productadd-count-value">
                {basket && basket.length}
              </span>
            </span>
            <span className="spanTxt2 pl-4">Cart</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
