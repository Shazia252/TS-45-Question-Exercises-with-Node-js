// Array of current users
var current_users = ["Usman", "Ali", "Areeba", "Zain", "Osama"];
// array of new users
var new_users = ["Shazia", "Ayesha", "Ali", "Mahid", "Areeba"];
// Loop through new_users to check for user names avaiblity 
new_users.forEach(function (new_one_user) {
    // Making a Condition for username already exist and save in our_condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print Different massage using if-alse statement
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already available"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
