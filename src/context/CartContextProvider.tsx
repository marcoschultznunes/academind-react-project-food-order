import React, { FC, useContext, useState } from "react";
import CartItem from "../models/CartItem";
import CartContext from "./CartContext";
import MealsContext from "./MealsContext";

/* 
  Contains the state and the functions that use the state of the cart 
*/
const CartContextProvider:FC<{children: React.ReactNode}> = (props) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const {meals} = useContext(MealsContext);

  /*
    addToCart => receives a mealId, searches the cart, and increments the amount of the
    cart item with the corresponding meal id.
  */
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

  /*
    removeFromCart => Decrements the amount of the cart item with the mealId passed as parameter
  */
  const removeFromCart = (mealId:string) => {
    const i = cart.findIndex(ci => ci.mealId === mealId);
    if(i !== -1){
      if(cart[i].amount === 1){  // Deletes when removing item with amount = 1
        setCart(prevCart => prevCart.filter(i => i.mealId !== mealId));
      } 
      else {  // Else decrement the amount
        const newCart = [...cart]; 
        newCart[i].amount--;
        setCart(newCart);
      }
    }
  };

  /*
    getAmountInCart => Gets the amount of a given cart item
  */
  const getAmountInCart = (mealId:string) => {
    const item = cart.find(i => i.mealId === mealId);
    
    if(item) {
      return item.amount; 
    }
    return 0;  // Returns 0 if item not in cart
  };

  /* 
    getTotalCartAmount => Returns the sum of the amounts of each item in the cart 
  */
  const getTotalCartAmount = () => cart.reduce((acc, item) => acc + item.amount, 0);

  /*
    getCartValue => Returns the total value of the cart
  */
  const getCartValue = () => cart.reduce((acc, item) => {
    const price = meals.find(meal => meal.id === item.mealId)!.price;  // Getting the price 
    const value = acc + (price * item.amount);  // 
    return Math.round(value * 100) / 100;  // Round 2 digits
  }, 0);

  return <CartContext.Provider value={{
    cart, addToCart, removeFromCart, getAmountInCart, getTotalCartAmount, getCartValue
  }}>
    {props.children}
  </CartContext.Provider>
};

export default CartContextProvider;
