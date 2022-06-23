import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useContext } from "react";
import CartContext from "../../context/CartContext";
import "./CartButton.css";

type CartButtonProps = {
  openCart: () => void;
};

const CartButton: FC<CartButtonProps> = (props) => {
  const {cart} = useContext(CartContext);

  const totalCartAmount = cart.reduce((acc, i) => acc + i.amount, 0);

  return <button className="cart-button" onClick={props.openCart}>
    <FontAwesomeIcon icon={faCartShopping} className="cart-button-icon" />
    <span>Your Cart</span>
    <span className="cart-button-quantity">{totalCartAmount}</span>
  </button>;
};

export default CartButton;
