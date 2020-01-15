# Group-Chat-Private-Chat-Application-using-MEAN-And-Socket.io
I have implemented GroupChat Application using MEAN Stack and for real time communication like sending messages ,joining and leaving rooms ,I have used Socket.IO which is a library for Real Time Web Applications.The purpose of the project is to become capable of using socket.io for RTC(Real Time Communication).

## Technologoies Used:
- Node.js(server side)
- Express.js(server side)
- Angular(client side)
- MongoDB(for storing of data)
- Angular Material Design (Front end)
- Socket.IO ( for RTC)

## Socket.IO
- Socket.IO is a powerful library for real time web  applications.It enables real time,bidirectional and event based communication between the browser and the server
- It is built on top of Websockets API and Node.js.
- It is mostly dependent on NPM.
- It is fast and reliable.Whenever any event occurs the server will get that event  and emit the event to particular connected client.

### Following are  the things that I have implemented
### Login and Signup  
- There is Login and Signup options for the user.I have used JWT Authentication for the user authentication.If you are not familiar with JWT then please check out this first [https://github.com/mohitsood5934/Implementing-JWT-using-Node.js]
![image](https://user-images.githubusercontent.com/26309496/72407845-e37d3380-3786-11ea-9114-cbe837510a09.png)
- Now firstly we have to signup ,so that we can login in to our application
![image](https://user-images.githubusercontent.com/26309496/72408319-7f5b6f00-3788-11ea-8024-c7d819ca3ea4.png)
- Now we can see,user"s record is successfully stored in the database.
![image](https://user-images.githubusercontent.com/26309496/72409421-b8e1a980-378b-11ea-9597-5f67db1a5c2d.png)
- Now we can login in to our application
![image](https://user-images.githubusercontent.com/26309496/72408451-ff81d480-3788-11ea-9015-4be35f08859e.png)

### After successfull login in to the applicaion
![image](https://user-images.githubusercontent.com/26309496/72408584-4374d980-3789-11ea-80e1-d3693d49c257.png)
- Routes
   - localhost:4200/chat                      GroupChat
   - localhost:4200/privatechat               Private Chat
###  GroupChat(Fully Implemented)
- From here onwards most of the things will be done by the use of sockets.
- We can see total users online displayed is null because ,user did not join any room till now.It will be shown once the user joined  room.
## Joining of the Room and sending messages to each other
- Users can join the room by pressing Join Room button
# First User 
![image](https://user-images.githubusercontent.com/26309496/72409025-9a2ee300-378a-11ea-8b4c-912fec005089.png)
#  Second User
![image](https://user-images.githubusercontent.com/26309496/72409052-af0b7680-378a-11ea-8ca6-17f80afb235e.png)


## Leaving of the Room 
- - Users can leave the room by pressing Leave Room button
# First User 
![image](https://user-images.githubusercontent.com/26309496/72409240-2a6d2800-378b-11ea-862c-2bb13ce3a518.png)

#  Second User
![image](https://user-images.githubusercontent.com/26309496/72409264-3953da80-378b-11ea-9d76-3627d8e4fa00.png)

### Private Chat(It will be implemented soon)

# I will now be explaining how sockets is used here in the application for sending messages,emitting events,leaving the room, joining the room and showing the number of online users in particular room





