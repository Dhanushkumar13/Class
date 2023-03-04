class Food {
    constructor(
      name = "",
      ingredients = [],
      addons = [],
      cookingSteps = [],
      timeToCook = 0,
      timeUnit = "",
      color = "",
      quantity = 0,
      quantityUnit = "",
      foodType = ""
    ) {
      this.name = name;
      this.ingredients = ingredients;
      this.addons = addons;
      this.cookingSteps = cookingSteps;
      this.timeToCook = timeToCook;
      this.timeUnit = timeUnit;
      this.color= color;
      this.quantity = quantity;
      this.quantityUnit = quantityUnit;
      this.foodType = foodType;
  
        
    }
  
    print() {
      return `The receipe ${this.name} will take ${this.timeToCook} ${this.timeUnit} to cook`;
    }
  
    updateCookingTime(timing = 0) {
      this.timeToCook = timing;
    }
  }
  
  const shawarma = new Food(
    "Shawarma",
    ["Chicken", "Spices", "Cabbage", "Roti", "Oil"],
    ["Maionese"],
    ["1"],
    3,
    "minutes",
    "Brownish White",
    100,
    "grams",
    "nv"
  );

 console.log(shawarma)
 //TASK 1:

const Tandoori = new Food (
    "Tandoori",
    ["Chicken","Spices","Curd","Ginger garlic paste","Oil"],
    ["Pudina Chutney", "Maiyonese"],
    ["1","2"],
    10,
    ["minutes"],
    "Reddish brown",
    "250",
    "grams",
    "nv"
);
console.log(Tandoori);
console.log(Tandoori.print());

const Burger = new Food (
    "Burger",
    ["Panner","Mustard sauce","Lettuce","Brown Bread"],
    ["Tomato ketchup"],
    ["1","2"],
    5,
    "minutes",
    "Brown",
    150,
    "grams",
    "veg"
);
console.log(Burger);
console.log(Burger.print());

const Pizza = new Food (
    "Pizza",
    ["Cheese","Dough","Pizza sauce","Parmesan","Olive"],
    ["Chilli flakes","Aregano spices"],
    ["1"],
    1,
    "hour",
    "Golden Brown",
    300,
    "gram",
    "veg"
);
console.log(Pizza);
console.log(Pizza.print());

//TASK 2 CREATING NEW CLASS ANIMALS:
 class Bikes{
    constructor(
        Name = "",
        CC = 0,
        CCunits= "",
        Type = "",
        HorsePower = 0,
        MaxSpeed = 0,
        MaxSpeedUnit = "",
        Brand = ""
    ){
        this.Name = Name;
        this.CC= CC;
        this.CCunits = CCunits;
        this.Type = Type;
        this.HorsePower = HorsePower;
        this.MaxSpeed = MaxSpeed;
        this.MaxSpeedUnit = MaxSpeedUnit;
        this.Brand = Brand;
    }

    Accesory(){
        return `This ${this.Name} already has accessory from ${this.Brand}`
    }
 }

const GT650 = new Bikes(
    "Continental GT650",
    650,
    "cc",
    "Cafe Rider",
    47,
    161,
    "Km/h",
    "Royal Enfield"
)

console.log(GT650);
console.log(GT650.Accesory());