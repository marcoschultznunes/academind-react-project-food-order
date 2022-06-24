import React, { FC, useContext } from "react";
import { createPortal } from "react-dom";
import "./CartModal.css";
import CartItem from "./CartItem";
import CartContext from "../../context/CartContext";
import MealsContext from "../../context/MealsContext";

type CartModalProps = {
  closeCart: () => void;
};

const CartModal:FC <CartModalProps> = (props) => {
  const {meals} = useContext(MealsContext);
  const {cart, getCartValue} = useContext(CartContext);

  // Mapping the cart items
  const renderCartItems = cart.length > 0 ? 
    cart.map(item => {
      const meal = meals.find(m => m.id === item.mealId);  // Getting the meal with the mealId
      
      return <CartItem 
        key={item.mealId} mealId={item.mealId} title={meal!.title} price={meal!.price} 
        amount={item.amount} 
      />;
    }) :
    <h3 className="cart-modal-empty-message">Cart is empty!</h3>

  return createPortal(
    <div className="cart-modal-container">
      <div className="cart-modal">
        {renderCartItems}
        <div className="cart-modal-total">
          <h3>Total Amount</h3>
          <h3>${getCartValue()}</h3>
        </div>
        <div className="cart-modal-controls">
          <button className="cart-modal-close" onClick={props.closeCart}>Close</button>
          <button className="cart-modal-order">Order</button>
        </div>
      </div>
    </div>
  , document.getElementById("modal-portal")!);
};

export default CartModal;
