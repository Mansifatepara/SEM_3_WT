const http = require('http')

const server = http.createServer((req,res)=>{
    res.end("Hellow World!!!!!!")
})

server.listen(7000,()=>{
    console.log("Heyy Friends I'm Here!!!!!")
})