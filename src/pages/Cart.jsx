import React, { useContext, useEffect } from "react";
import DonutCart from "../components/DonutCart";
import { CartContext } from "../context/carts";
import "./Cart.css";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return !cart.length ? (
    <h2>No items in Cart</h2>
  ) : (
    <div className="cart">
      <div>
        <h5>Check out :</h5>
        <a href="/checkout">
          <button className="button-87">Checkout {cart.length} Items</button>
        </a>
      </div>
      <div className="cartDonuts">
        {cart?.map((product) => {
          return <DonutCart key={product.id} donutId={product.donut_id} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
