let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "orange"];


// Teast for equality and inequality with strings

console.log("Is apple is equal to apple ");
console.log(apple == "apple");

console.log("Is apple is not equal apple");
console.log(apple != "apple");

// Tests using the lower case function
console.log("\nIs APPLE is equal to apple after converting to lowerCase");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("\nIs APPLE is not equal to apple after converting to lowerCase");
console.log(uppercaseApple.toLowerCase() != "apple");

// Numerical tests
// Equal to
console.log("\n Is ten is equal twenty?");
console.log(ten == twenty);
// Not Equal to
console.log("\n Is ten is not equal twenty?");
console.log(ten != twenty);

// Grerter than
console.log("\n Is ten is greater than zero");
console.log(ten > 0);
// Less than
console.log("\n Is ten is less than 10");
console.log(twenty < 10);

// Greater than or equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(twenty >= 5);

//  Less than or equal to
console.log("\n twenty is less than or equal to 10?");
console.log(twenty <= 10);

// Tests using "and" and "or" operators
// Using && (and)
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);

console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);

// Using || (OR)
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("\n 20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);

// Test whether an item is include in a array
console.log("\nIs orange include in my fruits array");
console.log(fruits.includes("orange"));

// Not Include
console.log("\nIs orange not include in my fruits array");
console.log(!fruits.includes("orange"));