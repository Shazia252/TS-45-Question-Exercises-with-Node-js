//  Define a function to print name from array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array containing amgicians name
var magician_names = ["Harry poter", "Shazia", "Hassan"];
var great_magicians = make_great(magician_names);
show_magicians(great_magicians);
