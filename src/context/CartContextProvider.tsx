import React, { FC, useState } from "react";
import CartItem from "../models/CartItem";
import CartContext from "./CartContext";

const CartContextProvider:FC<{children: React.ReactNode}> = (props) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (mealId:string) => {
    const i = cart.findIndex(ci => ci.mealId === mealId);
    if(i === -1) {  // If meal is not in cart, it is added as a new cart item
      setCart(prevCart => [...prevCart, new CartItem(mealId, 1)]);
    } 
    else {  // Else the existing cart item amount is incremented
      const newCart = [...cart];  // Shallow copy to ensure re-render
      newCart[i].amount++
      setCart(newCart);
    }
  };

  const removeFromCart = (mealId:string) => {
    const i = cart.findIndex(ci => ci.mealId === mealId);
    if(i !== -1){
      if(cart[i].amount === 1){  // Delete when removing item with amount = 1
        setCart(prevCart => prevCart.filter(i => i.mealId !== mealId));
      } 
      else {  // Else decrement the amount
        const newCart = [...cart]; 
        newCart[i].amount--;
        setCart(newCart);
      }
    }
  };

  const getAmountInCart = (mealId:string) => {
    const item = cart.find(i => i.mealId === mealId);
    
    if(item) {
      return item.amount; 
    }
    return 0;  // Returns 0 if item not in cart
  };

  const getTotalCartAmount = () => cart.reduce((acc, i) => acc + i.amount, 0);

  return <CartContext.Provider value={{
    cart, addToCart, removeFromCart, getAmountInCart, getTotalCartAmount
  }}>
    {props.children}
  </CartContext.Provider>
};

export default CartContextProvider;
