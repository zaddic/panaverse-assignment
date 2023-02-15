function make_sanwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    var sandwich = [];
    for (var i = 0; i < ingredients.length; i++) {
        sandwich.push(ingredients[i]);
    }
    return "You've ordered following combo ".concat(sandwich.toString());
}
console.log(make_sanwich('Bread slices', 'Cheese slices', 'Mayonnaise sauce'));
console.log(make_sanwich('Bread slices', 'Cheese slices', 'Mayonnaise sauce', 'Salt', 'Black pepper'));
console.log(make_sanwich('Bread slices', 'Cheese slices'));
