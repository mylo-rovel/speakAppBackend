import express from "express";
import { httpGetUserChatRooms } from "./messages.controller.js";
export const messagesRouter = express.Router();
messagesRouter.get("/", httpGetUserChatRooms);
