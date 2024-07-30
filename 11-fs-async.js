// FS Module (File system)
// async
//const fs = require('fs')
const {readFile,writeFile} = require('fs')

console.log("Start")
readFile('\content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    const first = result
    readFile('\content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('\content/result-async.txt',`here is the result: ${first},${second}`,(err)=>{
            if(err){
                console.log(err)
                return;
            }console.log('Done with this task')
        })
    })
})
console.log("starting next task")