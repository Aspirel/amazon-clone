import React from "react";
import "./CSS/Product.css";

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </div>
      </div>

      <img src={image} />

      <button className="product_button">Buy Now</button>
    </div>
  );
}

export default Product;
