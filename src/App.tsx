import React from 'react';
import CartModal from './components/cart/CartModal';
import MealsList from './components/meals/MealsList';
import Navbar from './components/navbar/Navbar';
import Summary from './components/summary/Summary';

function App() {
  return <React.Fragment>
    <CartModal /> 
    <Navbar />
    <Summary />
    <MealsList />
  </React.Fragment>;
};

export default App;
