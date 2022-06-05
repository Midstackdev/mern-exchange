
const serverIo = (io) => {

    io.on('connection', (socket) => {
        // console.log('a user is connected')
    
        socket.on('sendData', (data) => {
            io.emit('updateData', data)
        })
    
        
        socket.on('disconnect', () => {
            // console.log('a user disconnected')
        })
    
    })
}

export default serverIo;