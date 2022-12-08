import express, {Router} from "express";
import { 
    httpGetUserChatRooms,
    httpSaveNewMessageInRoom
 } from "./messages.controller.js";

export const messagesRouter: Router = express.Router();

messagesRouter.get("/", httpGetUserChatRooms);
messagesRouter.post("/", httpSaveNewMessageInRoom);