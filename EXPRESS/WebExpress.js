const express = require('express');
const app = express();

app.get('/home',(req,res)=>{
    res.send("Home with get method")
});

app.get('/about',(req,res)=>{
    res.send("About with get method")
});

app.get('/contact',(req,res)=>{
    res.send("contact with get method")
});

app.get('/myPage',(req,res)=>{
    res.send("myPage with get method")
});

app.get('/receive',(req,res)=>{
    res.send("receive with get method")
});

app.listen(3000,()=>{
    console.log('Srever started @ 3000')
})