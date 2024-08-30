// Global object
// console.log(global);

// This will keep running on and on
const int = setInterval(() => {
  console.log("Interval");
}, 1000);

// To stop it we use clearInterval
global.setTimeout(() => {
  console.log("Timeout\n");
  clearInterval(int);
}, 4000);

/*
We don't explicitly have to write "global" it is implied thus
setTimeout(() =>{
    console.log("Timeout\n");
}, 3000);
does the same work
*/

console.log(__dirname); // gets us the absolute path the current folder is in
console.log(__filename); // gets us the absolute path the current folder is in with the file name added as well
