import express, {Router} from "express";
import { 
    httpGetUserId,
    httpCreateNewUser
 } from "./users.controller.js";

export const usersRouter: Router = express.Router();

usersRouter.get("/", httpGetUserId);
usersRouter.post("/", httpCreateNewUser);
