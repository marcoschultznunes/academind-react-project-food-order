import React, { useState } from 'react';
import MealsList from './components/meals/MealsList';
import Meal from './models/Meal';
import Navbar from './components/navbar/Navbar';
import Summary from './components/summary/Summary';
import MealsContext from './context/MealsContext';
import CartContextProvider from './context/CartContextProvider';

// Will be replaced with an useEffect fetching the meals
const mealsList = [
  new Meal('m1', 'Sushi', 'Finest fish and veggies', 22.99),
  new Meal('m2', 'Schnitzel', 'A german specialty!', 16.5),
  new Meal('m3', 'Barbecue Burger', 'From the USA, raw, meaty', 12.99),
  new Meal('m4', 'Green Bowl', 'Healthy...and green...', 18.99),
  new Meal('m5', 'Sushi', 'Finest fish and veggies', 22.99),
  new Meal('m6', 'Sushi', 'Finest fish and veggies', 22.99),
  new Meal('m7', 'Sushi', 'Finest fish and veggies', 22.99),
  new Meal('m8', 'Sushi', 'Finest fish and veggies', 22.99),
  new Meal('m9', 'Sushi', 'Finest fish and veggies', 22.99),
  new Meal('m10', 'Sushi', 'Finest fish and veggies', 22.99),
];

function App() {
  const [meals] = useState<Meal[]>(mealsList);
  
  return <React.Fragment>
    <MealsContext.Provider value={{meals}}>
      <CartContextProvider>
        <Navbar />
        <Summary />
        <MealsList />
      </CartContextProvider>
    </MealsContext.Provider>
  </React.Fragment>;
};

export default App;
