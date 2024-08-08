//url core module
const url = require('url')
const path = "C:\\Users\\yes\\Desktop\\SEM 3\\WT PRACTICE LAB\\NODE\\PathDemo.js"
const q = url.parse(path,true);
console.log(q);


//os core module
const os = require('os')


//http core module
const http = require('http')
const server = http.createServer((req,res)=>{
    res.end("Hellow World!!!!!!")
})
server.listen(7000,()=>{
    console.log("Heyy Friends I'm Here!!!!!")
})

