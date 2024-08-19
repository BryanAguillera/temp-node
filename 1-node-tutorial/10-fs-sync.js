
// synch everthing happens one after the other. hihintayin matapos
// const fs = require('fs')
// console.log(fs);

//destructured
const {readFileSync, writeFileSync} = require('fs') // fs module (sync)
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first,second);

writeFileSync(
    './content/result-sync.txt', 
    `Here is the result for synch: ${first}, ${second}`, 
    // {flag: 'a'} //append *if theres no append it will not override the existing code*
)
console.log('done with this task');
console.log('starting the next one');



