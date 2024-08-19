const path = require('path') // path is another built in module
console.log(path.sep); // backward slash is the output (sep is seperator)
const filePath = path.join('\content', 'subfolder', 'test.txt') //starts with separator
console.log(filePath); // output of the filepath that uses path.join
const base = path.basename(filePath) //module
console.log(base);
console.log(__dirname); // path to current directory
const absolute = path.resolve(__dirname, 'content' , 'subfolder', 'test.txt');
console.log(absolute);

