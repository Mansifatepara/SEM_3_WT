const express = require('express');


const app = express();
const bodyParser = require('body-parser');
app.use(express.json());

app.use(bodyParser.urlencoded());


const facultys = [
    {
        id: 101,
        name: 'mansi',
        email: 'mansi@darshan.ac.in',
        age: 27
    },
    {
        id: 102,
        name: 'khushi',
        email: 'khushim@darshan.ac.in',
        age: 31
    },
    {
        id: 103,
        name: 'janvi',
        email: 'janvi@darshan.ac.in',
        age: 23
    }
]

//getAllX
app.get('/facultys', (req, res) => {
    res.send(facultys)
})

//getXByID
app.get('/facultys/:id', (req, res) => {
    const ans = facultys.find((fac) => {
        if (fac.id == req.params.id) {
            return true;
        }
    })
    res.send(ans);
})

//create
app.post('/facultys', (req, res) => {
    facultys.push(req.body);
    res.send("faculty added!!")
})

//update
app.patch('/facultys/:id', (req, res) => {
    const indexToEdit = facultys.findIndex((fac) => {
        if (fac.id == req.params.id) {
            return true;
        }
    })
    facultys[indexToEdit] = req.body;
    res.send("faculty edited!!")
})

//delete
app.delete('/facultys/:id', (req, res) => {
    const indexToDelete = facultys.findIndex((fac) => {
        if (fac.id == req.params.id) {
            return true;
        }
    })
    facultys.splice(indexToDelete, 1);
    res.send("faculty deleted!!")
})

//serach faculty
app.get('/facultys/search/:id', (req, res)=>{
    const ans = facultys.filter(fac => {
        if (fac.name.indexOf(req.params.id)>-1) {
            return true;
        }
    })
    res.send(ans);
})



app.listen(3000, () => {
    console.log("Server started at @ 3000");
})