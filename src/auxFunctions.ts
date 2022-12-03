import { Request, Response, NextFunction } from "express";
import { Profile, VerifyCallback } from "passport-google-oauth20";

export const checkLoggedIn = (_: Request, res: Response, next: NextFunction) => {
    const isLoggedIn = true;
    if (!isLoggedIn) { return res.status(404).json({error: 'You must login!'})}
    next();
    return res.status(200)
}

export const verifyCallback = (accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) => {
    console.log('Authenticating user')
    console.log({accessToken, refreshToken});
    console.log('Google profile', profile);
    done(null, profile);
}