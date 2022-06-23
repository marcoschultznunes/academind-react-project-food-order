import Meal from "./Meal";

class CartItem {
  meal:Meal;
  amount:number

  constructor(meal:Meal, amount:number){
    this.meal = meal;
    this.amount = Math.floor(amount);
  };
};

export default CartItem
