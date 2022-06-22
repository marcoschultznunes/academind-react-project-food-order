import React from 'react';
import MealsList from './components/meals/MealsList';
import Navbar from './components/navbar/Navbar';
import Summary from './components/summary/Summary';

function App() {
  return <React.Fragment> 
    <Navbar />
    <Summary />
    <MealsList />
  </React.Fragment>;
};

export default App;
