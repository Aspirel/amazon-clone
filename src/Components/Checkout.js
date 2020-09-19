import React from "react";
import "./CSS/Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_add"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/NocostEMI/DebitCards/revised/Chetan/banner_PC._CB497371711_.jpg"
        />
        <div>
          <h2 className="checkout_title">Your shopping basket</h2>
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
