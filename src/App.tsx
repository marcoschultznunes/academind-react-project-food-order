import React, { useState } from 'react';
import MealsList from './components/meals/MealsList';
import Meal from './models/Meal';
import Navbar from './components/navbar/Navbar';
import Summary from './components/summary/Summary';
import MealsContext from './context/MealsContext';
import CartContext from './context/CartContext';
import CartItem from './models/CartItem';

// Will be replaced with an useEffect fetching the meals
const mealsList = [
  new Meal('m1', 'Sushi', 'Finest fish and veggies', 22.99),
  new Meal('m2', 'Schnitzel', 'A german specialty!', 16.5),
  new Meal('m3', 'Barbecue Burger', 'From the USA, raw, meaty', 12.99),
  new Meal('m4', 'Green Bowl', 'Healthy...and green...', 18.99)
];

function App() {
  const [meals, setMeals] = useState<Meal[]>(mealsList);
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (mealId:string) => {
    // cart.find(ci => ci.meal.id === mealId)
  };
  const removeFromCart = (mealId:string) => {
    
  };

  return <React.Fragment>
    <MealsContext.Provider value={{meals}}>
      <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
        <Navbar />
        <Summary />
        <MealsList />
      </CartContext.Provider>
    </MealsContext.Provider>
  </React.Fragment>;
};

export default App;
