import React from "react";
import "./CSS/Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <p>
          Buried: The thrilling new crime series introducing Detective Jack Warr
          Kindle Edition
        </p>
        <p className="product_price">
          <small>£</small>
          <strong>1.00</strong>
        </p>
        <div className="product_rating">
          <p>&#11088;</p>
        </div>
      </div>

      <img src="https://m.media-amazon.com/images/I/51XKMqal5nL._AC_SY240_.jpg" />

      <button className="product_button">Buy Now</button>
    </div>
  );
}

export default Product;
