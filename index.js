const http = require('http');
const fs = require('fs');
const about =  fs.readFileSync('about.html');
const home = fs.readFileSync('index.html');

const server = http.createServer((req,res)=>{
  if(req.url === '/about') {
    res.end(about)
  }else {
   res.end(home)
  }
})

server.listen(3000);

console.log('Server running');