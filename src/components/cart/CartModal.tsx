import React, { FC } from "react";
import { createPortal } from "react-dom";
import "./CartModal.css";
import CartItem from "./CartItem";

const CartModal:FC = (props) => {

  return createPortal(
    <div className="cart-modal-container">
      <div className="cart-modal">
        <CartItem title="Sushi" price={22.99} amount={3} />
        <CartItem title="Sushi" price={22.99} amount={3} />
        <CartItem title="Sushi" price={22.99} amount={3} />
        <div className="cart-modal-total">
          <h3>Total Amount</h3>
          <h3>$0.00</h3>
        </div>
        <div className="cart-modal-controls">
          <button className="cart-modal-close">Close</button>
          <button className="cart-modal-order">Order</button>
        </div>
      </div>
    </div>
  , document.getElementById("modal-portal")!);
};

export default CartModal;
