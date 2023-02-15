var animals = ['cow', 'goat', 'buffalo'];
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
//Modify your program to print a statement about each animal, such as A dog would make a great pet.
for (var i = 0; i < animals.length; i++) {
    console.log("a ".concat(animals[i], " is famous for milk and meat"));
}
console.log('All of these animals give milk and meat');
