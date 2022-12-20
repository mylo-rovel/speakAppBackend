import http from "http";
import { app }  from "./web/app.js";
import * as dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient({log:["query"]});

class Piedrito {
    public comida: string;
    constructor(comida:string) {
        this.comida = comida;
    }
}
export const piedrito = new Piedrito("fideos123");

dotenv.config();

const PORT = process.env["API2_PORT"] || 3003;

const httpServer:http.Server = http.createServer(app);

httpServer.listen(PORT, () => {
    console.log("Server CentralCore ONLINE! Listening on PORT", PORT);
})