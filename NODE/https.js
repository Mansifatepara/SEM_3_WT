const https = require('https')

const server = https.createServer((req,res)=>{
    res.end("Hellow World!!!!!!")
}).listen(7100);