import React from "react";
import "../styles/components/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <div className="header__brandlogo">
        <img src="assets/images/amazon-India-Logo-w-txt.png" alt="b-logo" />
      </div>
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
        <div className="header__userNav__subSec header__userNav__loggedSec">
          <span className="spanTxt1">My Favorite</span>
          <span className="spanTxt2">Products</span>
        </div>
        <div className="header__userNav__subSec header__userNav__loggedSec">
          <span className="spanTxt1">Hello Guest!</span>
          <span className="spanTxt2">Sign In</span>
        </div>
        <div className="header__userNav__subSec header__userNav__orderSec">
          <span className="spanTxt1">Returns</span>
          <span className="spanTxt2">& Orders</span>
        </div>
        <div className="header__userNav__subSec header__userNav__primeSec">
          <span className="spanTxt1">Try Your</span>
          <span className="spanTxt2">Prime Offer</span>
        </div>
        <div className="header__userNav__subSec header__userNav__cartCount">
          {/* <span className="spanTxt1">Returns</span> */}
          <span>
            <ShoppingBasketIcon />
          </span>
          <span className="productadd-count-sec">
            <span className="productadd-count-value">3</span>
          </span>
          <span className="spanTxt2 pl-4">Cart</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
