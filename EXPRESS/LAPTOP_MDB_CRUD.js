const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const laptop = require('./laptop');

const connectionString = "mongodb+srv://mansifatepara:MANSIFATEPARA@cluster0.d6cae.mongodb.net/DemoDB";

mongoose.connect(connectionString).then(()=>{
    console.log('Connected with cloud database');

    const app = express();

    app.use(bodyParser.urlencoded());


    //getAll
    app.get('/laptops',async (req,res)=>{
        const ans = await laptop.find();
        res.send(ans);
    })

    // //getByID
    app.get('/laptops/:generation',async (req,res)=>{
        const ans = await laptop.findOne({generation:req.params.generation});
        res.send(ans);
    })

    //create
    app.post('/laptops',async (req,res)=>{
        lap = new laptop({...req.body});
        const ans = await lap.save();
        res.send(ans);
    })

    //update
    app.patch('/laptops/:generation',async (req,res)=>{
        lap = await laptop.findOne({generation:req.params.generation});
        lap.generation = req.body.generation;
        lap.company = req.body.company;
        lap.touch = req.body.touch;
        lap.prize = req.body.prize;
        lap.operatingSystem = req.body.operatingSystem;
        const ans = await lap.save();
        res.send(ans);
    })

    //delete
    app.delete('/laptops/:generation',async (req,res)=>{
        const ans = await laptop.deleteOne({generation:req.params.generation});
        res.send(ans);
    })

    //search
    app.get('/laptops/search/:text',async (req,res)=>{
        const ans = await laptop.find({company:{$regex:req.params.text}});
        res.send(ans);
    })


    app.listen(3000,()=>{
        console.log('Server started at 3000');
    });
})