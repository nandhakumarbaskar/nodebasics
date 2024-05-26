const fs = require("fs")

fs.writeFile("nandha.txt", "Hi write file",(err)=>{
    if(err){
        console.log("err:", err)
    }else{
        console.log("file write success")
    }
})
fs.readFile("nandha.txt","utf8",(err, data)=>{
    if(err){
        console.log("err:", err)
    }else{
        console.log("data->", data)
    }
})

const result = fs.writeFileSync("write-file-sync.txt", "Write file sync")
console.log("result->", result)
const rfresult = fs.readFileSync("write-file-sync.txt", "utf-8")
console.log("rfresult->", rfresult)

const statresult = fs.statSync("nandha.txt")
console.log("statresult->", statresult)