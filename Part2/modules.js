/* const people = require("./people");  logs people array and returns empty object 
console.log(people);  gives us an empty object

console.log(people.ages);
console.log(people.people);

better syntax 
const { people, ages } = require("./people");
console.log(people);
console.log(ages); 
*/
/* object that gives info about OS */
const os = require('os');
console.log(os.platform())