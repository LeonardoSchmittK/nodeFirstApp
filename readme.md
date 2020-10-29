# First app in NodeJS 

``

const http = require('http')
const fs = require('fs')
const aboutPage = fs.readFileSync('about.html')
const homePage = fs.readFileSync('index.html')
const server = http.createServer((req,res)=>{
  if(req.url === '/about'){
      res.end(aboutPage)
    }else {
      res.end(home)
  }
})

server.listen(4000,()=>'It's running on port 4000')

``


- [x] Understand the request and response concepts 
- [x] Make a server 
- [x] Use modules to iteract with the root files
- [x] Learn something 

