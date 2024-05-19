// Array of current users
let current_users = ["Usman", "Ali", "Areeba", "Zain", "Osama"]

// array of new users
let new_users = ["Shazia", "Ayesha", "Ali", "Mahid", "Areeba"]

// Loop through new_users to check for user names avaiblity 
new_users.forEach(new_one_user => {
    // Making a Condition for username already exist and save in our_condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    // Print Different massage using if-alse statement
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already available`)
    }else{
        console.log(`This Username ${new_one_user} is available`)

    }

})
