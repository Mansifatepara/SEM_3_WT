const express = require('express')
const app=express()

app.use('/abc',(req,res,next)=>{
    next()
    console.log('print msg!')
    res.send('hello world')
})

app.listen(3000)