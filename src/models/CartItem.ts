class CartItem {
  mealId:string;
  amount:number;

  constructor(mealId:string, amount:number){
    this.mealId = mealId;
    this.amount = Math.floor(amount);
  };
};

export default CartItem
