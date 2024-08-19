// do things at the same time
const {readFile, writeFile} = require('fs') // fs module 

console.log('start');

readFile('./content/first.txt', 'utf8', (err, result) => { //fallback function
    if(err){
        console.log(err);     
        return;
    }
    console.log(result);
    const first = result;

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
        const second = result;

        writeFile(
            './content/result-async.txt', 
            `Here is the result: ${first}, ${second}`,
            (err, result) => {
                if(err){
                    console.log(err);
                    return;
                }
                console.log('done with this task');
            }
        )
    })
})
console.log('starting next task');
