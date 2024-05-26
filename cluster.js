const express = require("express")
const cluster = require("cluster")
const numCpus = require("os").cpus().length

if(cluster.isMaster){
    for(let i=0; i<numCpus; i++){
        cluster.fork()
    }

    // cluster.on('')

    cluster.on("exit", (worker, code, signal)=>{
        console.log(`Child process kill ${worker.process.pid}`)
        cluster.fork()
    })
}else{
    const app = express()
    app.get("/exit",()=>{
        process.exit(1)
    })
    
    app.listen(7000, ()=>{
        console.log(`Server up and running on port 7000 and process id ${process.pid}`)
    })

}