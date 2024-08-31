const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const student = require('./student');

const connectionString = "mongodb+srv://mansifatepara:MANSIFATEPARA@cluster0.d6cae.mongodb.net/DemoDB";

mongoose.connect(connectionString).then(()=>{
    console.log('Connected with cloud database');

    const app = express();

    app.use(bodyParser.urlencoded());


    //getAll
    app.get('/students',async (req,res)=>{
        const ans = await student.find();
        res.send(ans);
    })

    // //getByID
    app.get('/students/:rollno',async (req,res)=>{
        const ans = await student.findOne({rollno:req.params.rollno});
        res.send(ans);
    })

    //create
    app.post('/students',async (req,res)=>{
        stu = new student({...req.body});
        const ans = await stu.save();
        res.send(ans);
    })

    //update
    app.patch('/students/:rollno',async (req,res)=>{
        stu = await student.findOne({rollno:req.params.rollno});
        stu.name = req.body.name;
        stu.rollno = req.body.rollno;
        stu.email = req.body.email;
        stu.eno = req.body.eno;
        const ans = await stu.save();
        res.send(ans);
    })

    //delete
    app.delete('/students/:rollno',async (req,res)=>{
        const ans = await student.deleteOne({rollno:req.params.rollno});
        res.send(ans);
    })

    //search
    app.get('/students/search/:text',async (req,res)=>{
        const ans = await student.find({name:{$regex:req.params.text}});
        res.send(ans);
    })


    app.listen(3000,()=>{
        console.log('Server started at 3000');
    });
})