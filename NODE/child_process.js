const ChildProcess  = require('child_process');

ChildProcess.exec('dir',(err,stdout,stdin)=>{
    console.log(stdout);
})