const express = require("express")
const http = require("http")
const socketIo = require("socket.io")

const app = express()
const server = http.createServer(app)
const io = socketIo(server)

app.use(express.static(__dirname))

io.on("connection", (socket)=>{
    console.log("User connected")

    socket.on("chat msg", (msg)=>{
        console.log("msg:"+msg)
        io.emit("chat msg", msg)
    })  


})

server.listen(7000,()=>{
    console.log("server up and running on port 7000")
})