const fs = require('fs')

// //exists()
// fs.exists("/path/to/file",(exists)=>{
//     console.log(exists ? 'found' : 'not found!');
// })

//readfile()
// fs.readFile('PathDemo.js',(err,data)=>{
//   console.log(data.toString())
// });

// //write()
// fs.writeFile('Second.txt',"this is testing",(err)=>{
//     console.log("file written successfully!!!")
// });

// //appendFile()
// fs.appendFile('second.txt'," darshan university",(err,data)=>{
//     console.log("File written Successfully!!!")
// })

//rename
// fs.rename('Third.txt','First.txt',(err)=>{
//     if(err){throw err}
//     console.log("File is Renamed!!")
// })

//unlink(delete)
fs.unlink('First.txt',(err)=>{
    if(err){throw err}
    console.log("File is Deleted!!")
})
