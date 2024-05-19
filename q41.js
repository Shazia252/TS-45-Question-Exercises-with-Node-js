//  Define a function to print name from array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Define an array containing amgicians name
var magicians_name = ["Harry poter", "Shazia", "Hassan"];
// calling the function to Print each magician name
show_magicians(magicians_name);
