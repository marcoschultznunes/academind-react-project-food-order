import { FC, useContext } from "react";
import CartContext from "../../context/CartContext";
import "./MealsListItem.css";

type MealsListItemProps = {
    mealId: string
    title: string
    description: string
    price: number
};

const MealsListItem: FC<MealsListItemProps> = (props) => {
    const { mealId, title, description, price} = props;
    const {addToCart} = useContext(CartContext);

    const clickHandler = () => {
        addToCart(mealId);
    }

    return <li className="meals-list-item-container">
        <div className="meals-list-item-details">
            <h3>{title}</h3>
            <p>{description}</p>
            <span>${price.toFixed(2)}</span>
        </div>
        <div className="meals-list-item-controls">
            <div>
                <p>3 in Cart</p>
            </div>
            <div>
                <button onClick={clickHandler}>+ Add</button>
            </div>
        </div>
    </li>;
};

export default MealsListItem;
