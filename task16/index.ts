let guests = ['Ali', 'Obaid', 'Farhad'];

//guests who will attend the dinner
console.log(`Hi, ${guests[0]}, I am inviting you to the dinner`);
console.log(`Hi, ${guests[1]}, Please accept my invitation fro a dinner`);
console.log(`Hi, ${guests[2]}, I am inviting you to the dinner`);


//guest who excused making it to the dinner
console.log(`${guests[1]} is unable to attend the dinner`);

//invite another guest and replace the one who is unavailable
guests[1] = 'Yasir';

//new list of guests
console.log(`Hi, ${guests[0]}, I am inviting you to the dinner`);
console.log(`Hi, ${guests[1]}, Please accept my invitation fro a dinner`);
console.log(`Hi, ${guests[2]}, I am inviting you to the dinner`);

//informing the people for more invitation
console.log('Hello everyone We have found a bigger dinner table. So inviting more people');

//adding new element to the start of an array
guests.unshift('Muhammad Haris');

//print the new list of guests
console.log(guests)

let start = guests.length/2;

//adding new geusts in the middle of the array
guests.splice(start, 0, 'Umer');

//adding new element to the end of an array
guests.push('Javed Ahmed')

console.log(`Hi, ${guests[0]}, I am inviting you to the dinner`);
console.log(`Hi, ${guests[1]}, Please accept my invitation fro a dinner`);
console.log(`Hi, ${guests[2]}, I am inviting you to the dinner`);
console.log(`Hi, ${guests[3]}, I am inviting you to the dinner`);
console.log(`Hi, ${guests[4]}, I am inviting you to the dinner`);
console.log(`Hi, ${guests[5]}, I am inviting you to the dinner`);











  