const {readFile}=require('fs');

console.log('started a first task');

readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log(result)
    console.log('completed first task')
}
) 
console.log('starting next task')

console.log('first')
setTimeout(()=>{
    console.log('second')
},0)
console.log('third')


setInterval(()=>{
    console.log('hello world')
},2000)
console.log('I will run first')


/*The processing of the delay in JavaScript occurs within the JavaScript engine, which is part of the browser or the JavaScript runtime environment. The JavaScript engine manages the event loop and handles the execution of timers and other asynchronous operations.

While JavaScript itself is single-threaded, modern browsers provide additional threads or worker processes to handle certain tasks asynchronously. For example, when you use functions like setTimeout or make AJAX requests, the browser's Web API (such as the Timer API or the XMLHttpRequest API) handles the timing or network requests in separate threads or processes.

When a delay is specified in setTimeout or setInterval, the JavaScript engine delegates the timing responsibility to the underlying Web API. This Web API handles the timing internally, without blocking the main JavaScript thread. Once the specified delay or interval elapses, the Web API adds the corresponding callback function to the callback queue.

The event loop, which runs on the main JavaScript thread, continuously checks the callback queue for pending tasks. When the main thread becomes idle (i.e., the call stack is empty), the event loop retrieves the callbacks from the callback queue and executes them in the order they were added.

To summarize, the delay processing and the execution of callback functions occur within the JavaScript engine and the browser's Web API, which work together to manage the event loop and handle asynchronous tasks while keeping the main JavaScript thread free for other operations.

*/

const http=require('http');


const server =http.createServer((req,res)=>{
    console.log('request event');
    res.end('Hello World')
})

server.listen(5000,()=>{
    console.log('server listening on port: 5000......')
});
