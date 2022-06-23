import { FC } from "react";
import "./CartItem.css";

type CartItemProps = {
  title: string;
  price: number;
  amount: number;
};

const CartItem:FC <CartItemProps> = (props) => {
  const {title, price, amount} = props

  return <div className="cart-item-container">
    <div className="cart-item-details">
        <h3>{title}</h3>
        <div>
          <span className="cart-item-price">${price.toFixed(2)}</span>
          <span className="cart-item-amount">x {amount}</span>
        </div>
    </div>
    <div className="cart-item-controls">
      <button>&ndash;</button>
      <button>+</button>
    </div>
  </div>;
};

export default CartItem;
