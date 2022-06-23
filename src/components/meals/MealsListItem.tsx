import { FC } from "react";
import "./MealsListItem.css";

type MealsListItemProps = {
    title: string
    description: string
    price: number
};

const MealsListItem: FC<MealsListItemProps> = (props) => {
    const { title, description, price } = props;

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
                <button>+ Add</button>
            </div>
        </div>
    </li>;
};

export default MealsListItem;
