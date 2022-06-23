import { FC, useContext } from "react";
import MealsContext from "../../context/MealsContext";
import "./MealsList.css";
import MealsListItem from "./MealsListItem";

const MealsList:FC = (props) => {
  const {meals} = useContext(MealsContext);
  
  const renderMeals = meals.length > 0 ? 
    meals.map(m => <MealsListItem 
      key={m.id} meal-id={m.id} title={m.title} description={m.description} price={m.price}
    />) :
    <h3>No meals available!</h3>

  return <div className="meals-list-container">
    <ul>
      {/* <MealsListItem title="Sushi" description="Finest fish and veggies" price={22.99} />
      <MealsListItem title="Sushi" description="Finest fish and veggies" price={22.99} />
      <MealsListItem title="Sushi" description="Finest fish and veggies" price={22.99} /> */}
      {renderMeals}
    </ul>
  </div>;
};

export default MealsList;
