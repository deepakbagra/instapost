const ChatServer = (io) => {
    
    io.on('connection',  (socket) => { 
        console.log(`User connected to ${socket.id}`);

        socket.on('join_room', (data) => {
            socket.join(data);
            console.log(`User with ID: ${socket.id} has joined the room: ${data}`);
        }); 
        
        socket.on('send_msg', (data) => {            
            socket.to(data.room).emit('rec_msg', (data));
        })
        
        socket.on('disconnect', () => {
            console.log(`User disconnected to ${socket.id}`);
        })
    })
}

export default ChatServer;