import React from "react";
import "../CSS/Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "../../DataLayer/StateProvider";

function Header() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src="amazon_logo.png" />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to="/login">
          <div className="header_option">
            <span className="header_optionL1">
              {/* {user ? `Hello, ${user}` : `Hello`} FINISH THIS */}
            </span>
            <span className="header_optionL2">
              {user ? "Sign out" : "Sign in"}
            </span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionL1">Returns</span>
          <span className="header_optionL2">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionL1">Your</span>
          <span className="header_optionL2">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionL1 header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
