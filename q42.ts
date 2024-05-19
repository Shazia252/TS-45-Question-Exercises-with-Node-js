//  Define a function to print name from array
function  show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}


function make_great(magicians: string []){
    return magicians.map(name =>`The Great ${name}`);
}
// Define an array containing amgicians name
let magician_names = ["Harry poter", "Shazia", "Hassan"];

// Call make_great function to modift magicians names
let great_magicians = make_great(magician_names);

//  call show_magicians that show modify list of magicians
show_magicians(great_magicians);