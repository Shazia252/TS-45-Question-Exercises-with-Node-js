// Define a function with a rest parameter that accept items arugments represnting Sandwich 
function makeSandwich() {
    var itemes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        itemes[_i] = arguments[_i];
    }
    console.log("Making a Sanwich with the following items: \n");
    itemes.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow Enjoy Sandwich");
}
// Call the function 3 times with 3 different number of arguments
makeSandwich("Chicken", "cheese", "Mayo", "Egg");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Tomato");
