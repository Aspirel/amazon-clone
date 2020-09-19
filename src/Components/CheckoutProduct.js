import React from "react";
import { useStateValue } from "../DataLayer/StateProvider";
import "./CSS/CheckoutProduct.css";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [state, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <p className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </p>
        <button onClick={removeFromBasket} className="checkoutProduct_button">
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
