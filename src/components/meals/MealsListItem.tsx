import {FC} from "react";
import "./MealsListItem.css";

type MealsListItemProps = {
  title: string
  description: string
  price: number
};

const MealsListItem:FC<MealsListItemProps> = (props) => {
  const {title, description, price} = props;

  return <li className="meals-list-item-container">
    <div className="meals-list-item-details">
      <h3>{title}</h3>
      <p>{description}</p>
      <span>${price}</span>
    </div>
    <div className="meals-list-item-controls">
      <div className="amount-input-container">
        <label htmlFor="amount">Amount</label>
        <input type="text" name="amount" />
      </div>
      <div>
        <button>+ Add</button>
      </div>
    </div>
  </li>;
};

export default MealsListItem;
