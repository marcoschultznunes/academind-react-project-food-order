import { FC, useContext } from "react";
import CartContext from "../../context/CartContext";
import "./CartItem.css";

type CartItemProps = {
  mealId: string;
  title: string;
  price: number;
  amount: number;
};

const CartItem:FC <CartItemProps> = (props) => {
  const {mealId, title, price, amount} = props
  const {addToCart, removeFromCart} = useContext(CartContext);

  const addClickHandler = () => {
    addToCart(mealId);
  }
  const removeClickHandler = () => {
    removeFromCart(mealId);
  }

  return <div className="cart-item-container">
    <div className="cart-item-details">
        <h3>{title}</h3>
        <div>
          <span className="cart-item-price">${price.toFixed(2)}</span>
          <span className="cart-item-amount">x {amount}</span>
        </div>
    </div>
    <div className="cart-item-controls">
      <button onClick={removeClickHandler}>&ndash;</button>
      <button onClick={addClickHandler}>+</button>
    </div>
  </div>;
};

export default CartItem;
