'use strict';
var _ = require('lodash');

let a = [1,2,3,4,5,6,7]

console.log("Original Array: ");
console.log(a);

console.log("Chunk into 2: ");
console.log(_.chunk(a, 2));

console.log("Reverse: ");
console.log(_.reverse(a));

console.log("Without 1, 2, and 3: "); 
console.log(_.without(a, 1,2,3));

console.log("Shuffled: "); 
console.log(_.shuffle(a));

console.log("Index of 4: ");
console.log(_.indexOf(a, 4));