import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useContext } from "react";
import CartContext from "../../context/CartContext";
import "./CartButton.css";

type CartButtonProps = {
  openCart: () => void;
};

const CartButton: FC<CartButtonProps> = (props) => {
  const {getTotalCartAmount} = useContext(CartContext);

  return <button className="cart-button" onClick={props.openCart}>
    <FontAwesomeIcon icon={faCartShopping} className="cart-button-icon" />
    <span>Your Cart</span>
    <span className="cart-button-quantity">{getTotalCartAmount()}</span>
  </button>;
};

export default CartButton;
