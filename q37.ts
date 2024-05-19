// Making a function
function make_shirt(size: string = "Large", printMessage: string = "I love TypeScript"){
console.log(`Creating a ${size} shirt with the ${printMessage} prints on Shirt`)
}
//  Calling a function with by-default
make_shirt();

// Calling a function now with Medium size and default message

make_shirt("Medium");

//  Calling a function now with Samll size and Diffrent message

make_shirt("Small", "I Love JavaScript")

