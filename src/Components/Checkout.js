import React from "react";
import { useStateValue } from "../DataLayer/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./CSS/Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_add"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/NocostEMI/DebitCards/revised/Chetan/banner_PC._CB497371711_.jpg"
        />
        <div>
          <h2 className="checkout_title">Your shopping basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
