import React from "react";
import "./CSS/Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SearchIcon from "@material-ui/icons/Search";

function header() {
  return (
    <div className="header">
      <img className="header_logo" src="amazon_logo.png" />

      <div className="header_search">
        <input className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionL1"> Hello</span>
          <span className="header_optionL2">Sign in</span>
        </div>

        <div className="header_option">
          <span className="header_optionL1">Returns</span>
          <span className="header_optionL2">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionL1">Your</span>
          <span className="header_optionL2">Prime</span>
        </div>

        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_optionL1 header_basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default header;
