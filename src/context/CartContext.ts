import React from "react";
import CartItem from "../models/CartItem";

type CartContextType = {
  cart: CartItem[];
  addToCart: (mealId:string) => void;
  removeFromCart: (mealId:string) => void;
};

const CartContext = React.createContext <CartContextType> ({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {}
});

export default CartContext;
