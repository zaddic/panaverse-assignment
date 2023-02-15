//Tests for equality and inequality with strings
var username = 'HASSAN';
var age = 22;
console.log(username === 'HASSAN'); //true
console.log(age >= 30); //false
//Tests using the lower case function
console.log(username.toLowerCase() == 'hassan'); //true
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(age >= 33); //true
console.log(age <= 33); //true
console.log(age == 33); //true
console.log(age != 33); //false
console.log(age > 30); //true
console.log(age < 40); //true
//Tests using "and" and "or" operators
console.log(username == 'HASSAN' && age == 22); //true
console.log(username == 'HASSAN' || age < 40); //true
//Test whether an item is in a array
var names = ['hassan', 'ali', 'yasir'];
console.log('item is in a array', names.includes('ali')); //true
console.log('item is not in an array', !names.includes('Ahmed')); //true
