


function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

console.log("Pizza 1")
var p1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(p1);

console.log("Pizza 2")
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2);

console.log("Pizza 3")
var p3 = pizzaOven("deep dish", "marinara", ["no chesse"], ["pepperoni", "bacon bits"]);
console.log(p3);

console.log("Pizza 4")
var p4 = pizzaOven("hand tossed", ["marinara", "barbeque"], ["no cheese"], ["chicken"]);
console.log(p4);
