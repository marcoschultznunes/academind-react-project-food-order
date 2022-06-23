import { FC, useState } from "react";
import CartModal from "../cart/CartModal";
import CartButton from "./CartButton";
import './Navbar.css';

const Navbar:FC<{}> = (props) => {
    const [cartOpened, setCartOpened] = useState(false);

    const openCart = () => {
        setCartOpened(true);
    }
    const closeCart = () => {
        setCartOpened(false);
    }

    const renderCart = cartOpened ? <CartModal closeCart={closeCart} /> : null

    return <nav className="main-navbar">
        <ul>
            <li><h1>ReactMeals</h1></li>
            <li>
                <CartButton openCart={openCart} />
            </li>
        </ul>
        {renderCart}
    </nav>;
};

export default Navbar;
