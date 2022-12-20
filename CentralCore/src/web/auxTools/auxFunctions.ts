import { Request, Response, NextFunction } from "express";


export const checkLoggedIn = (_: Request, res: Response, next: NextFunction) => {
    const isLoggedIn = true;
    if (!isLoggedIn) { return res.status(404).json({error: 'You must login!'})}
    next();
    return res.status(200);
}