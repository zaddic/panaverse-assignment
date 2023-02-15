function make_sanwich(...ingredients){
    let sandwich = []
    for(let i=0; i<ingredients.length; i++){
        sandwich.push(ingredients[i])
    }
    return `You've ordered following combo ${sandwich.toString()}`
}

console.log(make_sanwich('Bread slices', 'Cheese slices', 'Mayonnaise sauce'))
console.log(make_sanwich('Bread slices', 'Cheese slices', 'Mayonnaise sauce', 'Salt', 'Black pepper'))
console.log(make_sanwich('Bread slices', 'Cheese slices'))