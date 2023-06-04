const http=require('http');

//creating a http server
//the first argument of the callback function is the incoming request object, and the second is 
//response object that we will be sending
const server =http.createServer((req,res)=>{
if(req.url==='/'){
    res.end()
}if(req.url==='/about'){
    res.end('Here is our short history');
}

console.log(req)
//res.write('welcome to our home page')
res.end(`<h1>We cant find your page</h1>
<a href='/'>Back to home</a>
`)
})


server.listen(5000);
