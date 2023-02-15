var personName = "Ali";

var titleCase = personName
  .split(" ")
  .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
  .join(" ");

console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(titleCase);
