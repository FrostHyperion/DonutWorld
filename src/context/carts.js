import { createContext, useEffect, useState } from "react";
import { listCartItems, getCartItem as gCartItem } from "../graphql/queries"
import {createCartItem, deleteCartItem, updateCartItem} from "../graphql/mutations"
import {API} from "aws-amplify";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const fetchCart = async () => {
    try {
      const response = await API.graphql({query: listCartItems});
      setCart(response.data.listCartItems.items)
      return response.data.listCartItems.items;
    } catch (error) {
      throw error;
    }
  };

  const getCartItem = async (donutId) => {
    try {
        const response = await API.graphql({
            query: listCartItems, variables: {
                filter: {
                    donut_id: {
                        eq: donutId
                    }
                }
            }
        });

      return response.data.listCartItems.items;
    } catch (error) {
      throw error;
    }
  };

  const addToCart = async (donutId) => {
    try {
      const cartItem = await getCartItem(donutId);
      console.log(cartItem[0])

      if (cartItem[0]) {
        console.log("updated")
        const updatedCartItem = {
          id: cartItem[0].id,
          donut_id: cartItem[0].donut_id,
          quantity: cartItem[0].quantity + 1
        }

        const response = await API.graphql({query: updateCartItem, variables: {input: updatedCartItem}});

        fetchCart();

        return response;
      } else {
        console.log("added")
        const response = await API.graphql({query: createCartItem, variables: {input: {donut_id: donutId, quantity: 1}}});

        fetchCart();
        return response;
      }
    } catch (error) {
      throw error;
    }
  };

  const removeFromCart = async (cartItemId) => {
    try {
        console.log(cartItemId)
        const cartItem = (await API.graphql({query: gCartItem, variables: {id: cartItemId}}));
        const donut = cartItem.data.getCartItem.donut

        const updatedCartItem = {
          id: cartItem.data.getCartItem.id,
          donut_id: donut.id,
          quantity: cartItem.data.getCartItem.quantity - 1
        }

      if (cartItem.data.getCartItem.quantity > 1) {
        console.log("d")
          console.log("updated")
          const response = await API.graphql({query: updateCartItem, variables: {input: updatedCartItem}});

          console.log(response)

          fetchCart();

          return response;
      } else if(cartItem.data.getCartItem.quantity === 1) {
            console.log("deleted")
          console.log(cartItem.id)
          const response = await API.graphql({query: deleteCartItem, variables: {input: {id: cartItemId}}});

          console.log(response)

          fetchCart();
          return "deleted";
        }
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider
      value={{ cart, getCartItem, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
