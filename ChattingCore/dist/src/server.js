import http from "http";
import { app } from "./web/app.js";
import { SocketController } from "./sockets/socket.controller.js";
import * as dotenv from 'dotenv';
dotenv.config();
const PORT = process.env["PORT"] || 3001;
const httpServer = http.createServer(app);
const socketServer = new SocketController(httpServer);
httpServer.listen(PORT, () => {
    console.log("Server ONLINE!");
});
socketServer.socketListen();
