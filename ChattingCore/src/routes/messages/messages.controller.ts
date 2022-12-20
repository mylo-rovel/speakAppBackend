import { Request, Response } from "express";
import { 
    SaveNewMessageInRoom
 } from "../../models/messages/messages.model.js";
import { isCorrectMessageReq } from "../../types/typeGuards/messages.requests.js";

export const httpGetUserChatRooms = async (_: Request, res: Response) => {
    res.status(200).json("httpGetUserChatRooms good")
}

export const httpSaveNewMessageInRoom = async (req:Request, res:Response) => {
    const {body} = req;
    console.log("body received", body)
    if (!(isCorrectMessageReq(body))) return res.status(404).json("Error. incorrect data");
    try {
        const result = await SaveNewMessageInRoom(body);
        console.log("\n\nvalor obtenido\n\n", result)
        return res.status(200).json(result);
    }
    catch(err) {
        console.error(err);
    }
    return res.status(404).json("Error. Not valid message");
}

