const express = require('express')
const fs = require('fs')
const app=express();

app.get('/',(req,res)=>{
   const data = fs.readFile('darshan.txt',(err,data)=>{
    if(err) return err;
    return res.send(data.toString())
   })
})

app.listen(3000,()=>{
    console.log('server started')
})