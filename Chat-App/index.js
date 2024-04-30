// require packeges
const http = require("http");
const path = require("path")
const express = require("express");
const {Server} = require("socket.io")
const port = 8000;


const app = express();
const server = http.createServer(app);
const io = new Server(server);

//Scoket.io

io.on('connection', (socket) => {
socket.on("user-message", (message) =>{

io.emit("message", message)
});  });
// Midlewares

app.use(express.static(path.resolve("./public")));


// all rotes
app.get("/",(req,res)=>{
    return  res.sendFile("/public/index.html")
})



server.listen(port,()=> console.log(`Server Started at ${port}`));