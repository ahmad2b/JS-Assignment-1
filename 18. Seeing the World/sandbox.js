// Storing the Countries in the Arary
let locationToVisit = ["Malaysia", "Saudia Arabia", "Austrailia", "Canada", "Norway", "Turkey"];

// Printing the array in Original Order
console.log(locationToVisit);

// Printing the same array in Alphabatical Order
let orderAlpha = locationToVisit.slice().sort() ;
console.log(orderAlpha);
console.log(locationToVisit);

// Printing the copy array in reverse alphabatical order
let orderReverse = orderAlpha.reverse();
console.log(orderReverse);
console.log(locationToVisit);

locationToVisit.reverse();
console.log(locationToVisit);
locationToVisit.reverse();
console.log(locationToVisit);

locationToVisit.sort();
console.log(locationToVisit);
console.log(locationToVisit.reverse());