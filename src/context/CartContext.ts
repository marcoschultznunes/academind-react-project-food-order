import React from "react";
import CartItem from "../models/CartItem";

type CartContextType = {
  cart: CartItem[];
  addToCart: (mealId:string) => void;
  removeFromCart: (mealId:string) => void;
  getAmountInCart: (mealId:string) => number;
};

const CartContext = React.createContext <CartContextType> ({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  getAmountInCart: () => 0
});

export default CartContext;
