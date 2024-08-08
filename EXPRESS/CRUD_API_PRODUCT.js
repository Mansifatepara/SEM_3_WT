const express = require('express');


const app = express();
const bodyParser = require('body-parser');
app.use(express.json());

app.use(bodyParser.urlencoded());

const products = [
    {
        id:101,
        prdName:'iphone',
        prdCompany:'amazon',
        prize:100000
    },
    {
        id:102,
        prdName:'laptop',
        prdCompany:'flipcart',
        prize:40000
    },
    {
        id:103,
        prdName:'ipad',
        prdCompany:'meesho',
        prize:30000
    }
]

//getAllX
app.get('/products',(req,res)=>{
    res.send(products)
})

//getXByID
app.get('/products/:prize',(req,res)=>{
    const ans = products.find((prd)=>{
        if(prd.id==req.params.prize){
            return true;
        }
    })
    res.send(ans);
})

//create
app.post('/products',(req,res)=>{
    products.push(req.body);
    res.send("product added!!")
})

//update
app.patch('/products/:prize',(req,res)=>{
    const indexToEdit = products.findIndex((prd)=>{
        if(prd.id==req.params.prize){
            return true;
        }
    })
    products[indexToEdit] = req.body;
    res.send("product edited!!")
})

//delete
app.delete('/products/:prize',(req,res)=>{
    const indexToDelete = products.findIndex((prd)=>{
        if(prd.id==req.params.prize){
            return true;
        }
    })
    products.splice(indexToDelete,1);
    res.send("product deleted!!")
})

app.listen(3004,()=>{
    console.log("Server started at @ 3004");
})