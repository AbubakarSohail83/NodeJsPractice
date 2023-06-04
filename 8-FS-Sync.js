//file system module
//can be two modes, async or sync, for now we are using synchronous
const {writeFileSync,readFileSync}=require('fs');


//Synchronously reads the entire contents of a file.
const first=readFileSync('./content/first.txt','utf-8');
const second=readFileSync('./content/second.txt','utf-8');

console.log(first,second);

//creating a new file if not already present, flags can be set accordingly, a here is for append
writeFileSync('./content/resultsync.txt',`Here is the result: ${first}, ${second}`,{flag:'a'})