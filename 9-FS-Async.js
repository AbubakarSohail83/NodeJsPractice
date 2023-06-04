//file system module
//can be two modes, async or sync, for now we are using asynchronous
const {writeFile,readFile}=require('fs');


readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const firstText=result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const secondText=result;
        
        writeFile('./content/resultasync.txt',`Here is the result: ${firstText}, ${secondText}`,{flag:'a'},
        (err,result)=>{
            if(err)
            {
                console.log(err);
                return 
            }
            console.log(result)
})})})