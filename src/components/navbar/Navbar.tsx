import { FC } from "react";
import CartButton from "./CartButton";
import './Navbar.css';

const Navbar:FC<{}> = (props) => {

    return <nav className="main-navbar">
        <ul>
            <li><h1>ReactMeals</h1></li>
            <li>
                <CartButton />
            </li>
        </ul>
    </nav>;
};

export default Navbar;
