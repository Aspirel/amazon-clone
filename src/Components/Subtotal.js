import React from "react";
import "./CSS/Subtotal.css";
import CurrecyFormat from "react-currency-format";
import { useStateValue } from "../DataLayer/StateProvider";
import { getBasketTotal } from "../DataLayer/Reducer";

function Subtotal() {
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrecyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length}):
              <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"£"}
      />

      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
