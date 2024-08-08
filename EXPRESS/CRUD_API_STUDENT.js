const express = require('express');


const app = express();
const bodyParser = require('body-parser');
app.use(express.json());

app.use(bodyParser.urlencoded());

const students = [
    {
        id:101,
        name:'mansi',
        email:'mansi@darshan.ac.in',
        age:27
    },
    {
        id:102,
        name:'khushi',
        email:'khushin@darshan.ac.in',
        age:31
    },
    {
        id:103,
        name:'janvi',
        email:'janvi@darshan.ac.in',
        age:23
    }
]

//getAllX
app.get('/students',(req,res)=>{
    res.send(students)
})

//getXByID
app.get('/students/:id',(req,res)=>{
    const ans = students.find((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    })
    res.send(ans);
})

//create
app.post('/students',(req,res)=>{
    students.push(req.body);
    res.send("student added!!")
})

//update
app.patch('/students/:id',(req,res)=>{
    const indexToEdit = students.findIndex((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    })
    students[indexToEdit] = req.body;
    res.send("student edited!!")
})

//delete
app.delete('/students/:id',(req,res)=>{
    const indexToDelete = students.findIndex((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    })
    students.splice(indexToDelete,1);
    res.send("student deleted!!")
})

app.listen(3003,()=>{
    console.log("Server started at @ 3003");
})