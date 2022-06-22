import { FC } from "react";
import "./MealsList.css";
import MealsListItem from "./MealsListItem";

const MealsList:FC = (props) => {
  
  return <div className="meals-list-container">
    <ul>
      <MealsListItem title="Sushi" description="Finest fish and veggies" price={22.99} />
      <MealsListItem title="Sushi" description="Finest fish and veggies" price={22.99} />
      <MealsListItem title="Sushi" description="Finest fish and veggies" price={22.99} />
    </ul>
  </div>;
};

export default MealsList;
