// Define a function with a rest parameter that accept items arugments represnting Sandwich 
function makeSandwich(...itemes: string[]){
    console.log("Making a Sanwich with the following items: \n");
    itemes.forEach(singleItem => console.log(singleItem));
    console.log("\nNow Enjoy Sandwich");
} 
// Call the function 3 times with 3 different number of arguments

makeSandwich("Chicken", "cheese", "Mayo", "Egg");
makeSandwich("Bread", "Butter");

makeSandwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Tomato",);