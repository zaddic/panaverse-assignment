let locations = ['United States', 'London', 'Dubai', 'Saudia Arabia', 'Turkey'];

console.log('Original Order', locations)

// array sorting with changing original

let sortedLocations = locations.slice().sort(); 

console.log('Array in alphabetical Order', sortedLocations);

//original array unchanged
console.log('Original Order', locations);


console.log('Array in reverse Order', locations.slice().reverse().sort());

console.log('Original Order', locations);