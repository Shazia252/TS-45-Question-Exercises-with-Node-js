//  Define a function to print name from array
function  show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}


function make_great(magicians: string []){
    return magicians.map(name =>`The Great ${name}`);
}
// Define an array containing amgicians name
let magician_names = ["Harry poter", "Shazia", "Hassan"];

// Making a copy original array through .Slice() function

let copy_magician_names = magician_names.slice()

//  Modify the copied array to include "Tahe Great" with thier names
let copy_great_magicians = make_great(copy_magician_names);

//  Show both array s original and Copied

// Original
console.log("Original Array\n")
show_magicians(magician_names);

//  Copied
console.log("\nCopied Array\n")
show_magicians(copy_great_magicians);