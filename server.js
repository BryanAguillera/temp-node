const _ = require('lodash')//lodash

const items = [1, [2,[3, [4]]]]
const newItems = _.flattenDeep(items); //output [1,2,3,4]
console.log(newItems);
