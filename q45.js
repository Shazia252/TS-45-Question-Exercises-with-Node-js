//  Define a function to create a car object with optional options...
function create_car(manufacturer, model) {
    // Initialize a car object with manufaturer and model
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    //  Add additinal options to the  car object
    options.forEach(function (option) {
        var _a = option.split(":"), Key = _a[0], Value = _a[1];
        car[Key.trim()] = Value.trim();
    });
    return car;
}
//  Call the function to create a car object
var my_car = create_car("Toyota", "Corrolla", "color: Black", "Unroof: True", "Year: 2024");
// Print the variable to ensure all the information is stored correctly in the car object
console.log(my_car);
