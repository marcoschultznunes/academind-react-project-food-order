import React from "react";
import Meal from "../models/Meal";

type MealsContextType = {
  meals: Meal[];
};

const MealsContext = React.createContext <MealsContextType> ({
  meals: []
});

export default MealsContext;
