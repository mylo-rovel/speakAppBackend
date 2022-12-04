import express, {Router} from "express";
import { 
    httpGetUserChatRooms
 } from "./messages.controller.js";

export const messagesRouter: Router = express.Router();

messagesRouter.get("/", httpGetUserChatRooms);