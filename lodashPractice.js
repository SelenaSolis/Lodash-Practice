'use strict';
var _ = require('lodash');

let a = [1,2,3,4,5,6,7]

console.log(_.chunk(a, 2));

console.log(_.reverse([1,2,3,4,5,6,7]));

console.log(_.without([1,2,3,4,5,6], 1,2,3));

console.log(_.shuffle([1,2,3,4,5,6,7,8,9]))