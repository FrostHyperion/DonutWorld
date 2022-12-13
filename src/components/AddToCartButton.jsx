import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/carts";
import "./AddToCartButton.css";
import {AccountContext} from "../context/account";

const AddToCartButton = ({ donutId }) => {
  const { addToCart, removeFromCart, getCartItem } =
    useContext(CartContext);

  const {user} = useContext(AccountContext)

  const [cartItem, setCartItem] = useState({});
  const [cartQuanity, setCartQuantity] = useState(0);

  useEffect(() => {
    getCartItem(donutId)
      .then((response) => {
        if (response[0]) {
          setCartItem(response[0]);
          setCartQuantity(response[0].quantity);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cartQuanity]);

  return (
    <div className="add-to-cart-button">
      <div className="addToCartContainer">
        {cartItem?.quantity ? (
          <div>
            <button
              className="increase"
              onClick={() => {
                if(user){
                    addToCart(donutId)
                    .then((response) => {
                      setCartItem(response)
                      setCartQuantity(response.quantity);
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                } else {
                    window.alert("you need to login to perform this action")
                }
              }}
            >
              +
            </button>
            {cartQuanity}
            <button
              className="decrease"
              onClick={() => {
                if(user){
                    removeFromCart(cartItem.id)
                    .then((response) => {
                        console.log(response)
                        if(response === "deleted"){
                          setCartItem({})
                          setCartQuantity(0)
                        } else {
                          setCartItem(response)
                          setCartQuantity(response.quantity);
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                } else {
                    window.alert("you need to login to perform this action")
                }
              }}
            >
              -
            </button>
          </div>
        ) : (
          <button
            className="addToCart"
            onClick={() => {
              if(user){
                  addToCart(donutId)
                  .then((response) => {
                      setCartQuantity(response.quantity);
                  })
                  .catch((error) => {
                      console.log(error);
                  });
              } else {
                  window.alert("you need to login to perform this action")
              }
            }}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default AddToCartButton;
