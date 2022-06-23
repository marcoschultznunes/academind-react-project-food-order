import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import "./CartButton.css";

type CartButtonProps = {
  openCart: () => void;
};

const CartButton: FC<CartButtonProps> = (props) => {
  return <button className="cart-button" onClick={props.openCart}>
    <FontAwesomeIcon icon={faCartShopping} className="cart-button-icon" />
    <span>Your Cart</span>
    <span className="cart-button-quantity">4</span>
  </button>;
};

export default CartButton;
