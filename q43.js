//  Define a function to print name from array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array containing amgicians name
var magician_names = ["Harry poter", "Shazia", "Hassan"];
// Making a copy original array through .Slice() function
var copy_magician_names = magician_names.slice();
//  Modify the copied array to include "Tahe Great" with thier names
var copy_great_magicians = make_great(copy_magician_names);
//  Show both array s original and Copied
// Original
console.log("Original Array\n");
show_magicians(magician_names);
//  Copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
