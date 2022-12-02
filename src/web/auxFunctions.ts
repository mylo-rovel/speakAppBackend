import { Request, Response, NextFunction } from "express";

export const checkLoggedIn = (req: Request, res: Response, next: NextFunction) => {
    const isLoggedIn = true;
    if (!isLoggedIn) { return res.status(404).json({error: 'You must login!'})}
    next();
}