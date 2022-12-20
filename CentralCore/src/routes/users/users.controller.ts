import { Request, Response } from "express";
import { isValidNewUser } from '../../types/typeGuards/users.requests.js';
import { 
    createNewUser
 } from "../../models/users/users.model.js";

export const httpGetUserId = async (_:Request, res:Response) => {
    // const modelResponse = await getUserId();
    return res.status(200).json("heh");
}

export const httpCreateNewUser = async (req:Request, res:Response) => {
    const {body} = req;
    console.log(body)
    if (!(isValidNewUser(body))) return res.status(404).json("Error. Invalid user");
    try {
        const result = await createNewUser(body);
        console.log("\nNuevo usuario creado", result, '\n')
        return res.status(200).json(result);
    }
    catch(err) {
        console.error(err);
    }
    return res.status(404).json("Error. Not valid user");
}