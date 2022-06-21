import { FC } from "react";
import "./CartButton.css";

const CartButton:FC = (props) => {

    return <button className="cart-button">
        {/* icon */}
        <span>Your Cart</span>
        <span className="cart-button-quantity">4</span>
    </button>;
};

export default CartButton;
