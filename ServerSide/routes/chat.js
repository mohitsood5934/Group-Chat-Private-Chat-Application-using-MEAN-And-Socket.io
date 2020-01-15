var express = require('express');
var router = express.Router();
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var cors=require("cors");
server.listen(4000,function(req,res){

    console.log("You are listening to port 4000");
 });

io.origins('*:*');
var users=0;

io.on('connection',function(socket){
    console.log("User connected");

    socket.on('disconnect',function(socket){
        console.log("user disconnected")
    })
    //join room
    socket.on('join',function(data){
 
        //display the number of users in room 
        users+=1
        console.log(users)
        io.sockets.emit('usercount',{count:users +' person joined '});
        //end

        // user joining the particular room
        socket.join(data.room)
      
        console.log(data.user + 'joined the room:' +data.room)

       //inform other on the room about event
       socket.broadcast.to(data.room).emit('new user joined',{user:data.user,message:"has joined this room "});
      

    });
    //leave room

    socket.on('leave',function(data){
        //number of users in room
        users--
        io.sockets.emit('usercount',{count:'' +users})
        console.log(users)
        //end

        console.log(data.user + "has left the room " +data.room)
        socket.broadcast.to(data.room).emit('left room',{user:data.user,message:"has left the room "});
        socket.leave(data.room)
        
    })

    //sending message
    socket.on('message',function(data){
        io.in(data.room).emit('new message',{user:data.user,message:data.message})
    })

    

})

module.exports = router;