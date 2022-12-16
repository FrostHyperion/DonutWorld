import React, { useContext, useEffect } from "react";
import { useState } from "react";
import DonutCheckout from "../components/DonutCheckout";
import CheckoutForm from "../components/forms/CheckoutForm";
import { CartContext } from "../context/carts";
import "./Checkout.css";
import { DonutContext } from "../context/donuts";
import getStripe from "../lib/stripe";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const { fetchDonut } = useContext(DonutContext);

  const [totalCost, setTotalCost] = useState(0);
  //  const [netCost, setNetCost] = useState(0);

  useEffect(() => {
    let tempTotalCost = 0;
    // eslint-disable-next-line array-callback-return
    cart?.map((cartItem) => {
      const { donut, quantity } = cartItem;
      tempTotalCost += parseFloat(donut.price) * parseFloat(quantity);
    });

    console.log(tempTotalCost);
    setTotalCost(tempTotalCost.toFixed(2));
  }, [cart, totalCost]);

  const handleCheckout = async () => {
    const items = cart?.map((c) => {
      return {
        price: c.donut.stripe_price_id,
        quantity: c.quantity,
      };
    });

    console.log(items);

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      lineItems: items,
      mode: "payment",
      successUrl: `http://localhost:3000/`,
      cancelUrl: `http://localhost:3000/checkout`,
    });

    console.warn(error.message);
  };

  return (
    <div className="checkout">
      <div className="left">
        <h2>Your Cart</h2>
        <div className="checkout-donuts">
          {cart?.map((product) => {
            return <DonutCheckout key={product.id} donut={product.donut} />;
          })}
        </div>
      </div>
      <div className="right">
        <div className="address">
          <div className="from"></div>
          <div className="to">
            <CheckoutForm />
          </div>
        </div>
        <div className="checkout-details">
          <div>
            <span>Total Cost:</span> {totalCost}
          </div>
          <a href="/card">
            <button className="button-73" onClick={handleCheckout}>
              Proceed to pay
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
