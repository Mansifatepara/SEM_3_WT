const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const faculty = require('./faculty');

const connectionString = "mongodb+srv://mansifatepara:MANSIFATEPARA@cluster0.d6cae.mongodb.net/DemoDB";

mongoose.connect(connectionString).then(()=>{
    console.log('Connected with cloud database');

    const app = express();

    app.use(bodyParser.urlencoded());


    //getAll
    app.get('/faculties',async (req,res)=>{
        const ans = await faculty.find();
        res.send(ans);
    })

    // //getByID
    app.get('/faculties/:id',async (req,res)=>{
        const ans = await faculty.findOne({id:req.params.id});
        res.send(ans);
    })

    //create
    app.post('/faculties',async (req,res)=>{
        fac = new faculty({...req.body});
        const ans = await fac.save();
        res.send(ans);
    })

    //update
    app.patch('/faculties/:id',async (req,res)=>{
        fac = await faculty.findOne({id:req.params.id});
        fac.name = req.body.name;
        fac.email = req.body.email;
        fac.id = req.body.id;
        const ans = await fac.save();
        res.send(ans);
    })

    //delete
    app.delete('/faculties/:id',async (req,res)=>{
        const ans = await faculty.deleteOne({id:req.params.id});
        res.send(ans);
    })

    //search
    app.get('/faculties/search/:text',async (req,res)=>{
        const ans = await faculty.find({name:{$regex:req.params.text}});
        res.send(ans);
    })


    app.listen(3000,()=>{
        console.log('Server started at 3000');
    });
})