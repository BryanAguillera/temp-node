// MODULES
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// const names = require('./4-names');
// console.log(names);


const {angelo, ayan} = require('./4-names'); //array destructuring
const sayHi  = require('./5-utils'); // using module 5-utils
const data = require('./6-alternative-flavor') // using module 6
require('./7-mind-grenade') // using module without using variable


sayHi(ayan); // using module 5 and 4
sayHi(angelo) //using module 5 and 4
