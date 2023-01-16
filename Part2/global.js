// we do not have to specify the global object each time we call a function

console.log(global);

global.setTimeout(() => {
  console.log("Hi");
}, 1000);

// instead we can do this
setTimeout(() => {
  console.log("hi");
}, 1000);

console.log(__dirname); /* gives us directory name and file name */
console.log(__filename);
