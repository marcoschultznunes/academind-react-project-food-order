class Meal {
  id:string;
  title:string;
  description:string;
  price:number;
  
  constructor(title:string, description:string, price:number){
    this.id = new Date().toISOString();
    this.title = title;
    this.description = description;
    this.price = price;
  };
};

export default Meal;
