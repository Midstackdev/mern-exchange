import { createServer } from "http";
import { Server } from "socket.io";
import { findByBase } from "../service/rates.service.js";

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
      }
});

// const rates = await findByBase('BTC')
// console.log(rates)


io.on('connection', (socket) => {
    console.log('a user is connected')

    
    socket.on('disconnect', () => {
        console.log('a user disconnected')
    })

})


httpServer.listen(8500);