import { Request, Response, NextFunction } from "express";
import { Profile, VerifyCallback } from "passport-google-oauth20";
import { deserializeUserFnType, serializeUserFnType } from '../../types/passportTypes';


export const checkLoggedIn = (_: Request, res: Response, next: NextFunction) => {
    const isLoggedIn = true;
    if (!isLoggedIn) { return res.status(404).json({error: 'You must login!'})}
    next();
    return res.status(200);
}


//! Here we can access to the user data so we can store it
//* This is used in the middleware (in web/app.ts):
//? passport.use(new Strategy(AUTH_OPTIONS, verifyCallback))
export const verifyCallback = (accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) => {
    console.log('Authenticating user');
    console.log({accessToken, refreshToken});
    // console.log('Google profile', profile);
    const userEmailData = profile.emails;
    if (userEmailData !== undefined) {
        const emailToSave = userEmailData[0]?.value;
        console.log(emailToSave);
        
    }
    done(null, profile);
}

//* This is used in web/app.ts:
//? passport.serializeUser(serializeUserFn);
//! Save the session to the cookie
export const serializeUserFn: serializeUserFnType = (user, done) => {
    // console.log('\n\n\n\n serializeUser', user);
    done(null, user);
}

//* This is used in web/app.ts:
//? passport.deserializeUser(deserializeUserFn);
//! Read the session from the cookie
export const deserializeUserFn: deserializeUserFnType = (id, done) => {
    // User.findById(id).then(user => {
    //   done(null, user);
    // });
    // console.log('\n\n\n\n deserializeUser', id);
    done(null, null);
}