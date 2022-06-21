import { FC } from "react";
import './Navbar.css';

const Navbar:FC<{}> = (props) => {

    return <nav className="main-navbar">
        <ul>
            <li><h1>ReactMeals</h1></li>
            <li>
                <button className="cart-button">
                    {/* icon */}
                    <span>Your Cart</span>
                    <span className="cart-button-quantity">4</span>
                </button>
            </li>
        </ul>
    </nav>;
};

export default Navbar;
