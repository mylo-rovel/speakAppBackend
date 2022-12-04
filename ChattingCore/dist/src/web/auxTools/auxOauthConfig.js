import * as dotenv from 'dotenv';
dotenv.config();
console.log(`Testing load of env variables \n${process.env['ENV_TESTING']}\n`);
//? 1000ms 60s 60min 24hrs => 24 hours in milliseconds
const tokenDuration = 1000 * 60 * 60 * 24;
//* This is used by other config/setup objects
const OAUTH_CONFIG = {
    CLIENT_ID: (process.env["CLIENT_ID"]) ? process.env["CLIENT_ID"] : '',
    CLIENT_SECRET: (process.env["CLIENT_SECRET"]) ? process.env["CLIENT_SECRET"] : '',
    COOKIE_KEY_1: (process.env["COOKIE_KEY_1"]) ? process.env["COOKIE_KEY_1"] : '',
    COOKIE_KEY_2: (process.env["COOKIE_KEY_2"]) ? process.env["COOKIE_KEY_2"] : '',
    COOKIE_DURATION: tokenDuration,
};
//* This is used in the middleware (in web/app.ts):
//? passport.use(new Strategy(AUTH_OPTIONS, verifyCallback))
export const AUTH_OPTIONS = {
    callbackURL: '/auth/login/callback',
    clientID: OAUTH_CONFIG.CLIENT_ID,
    clientSecret: OAUTH_CONFIG.CLIENT_SECRET
};
//* This is used in the middleware (in web/app.ts):
//? app.use(cookieSession(COOKIE_SESSION_SETUP));
export const COOKIE_SESSION_SETUP = {
    name: 'session',
    maxAge: OAUTH_CONFIG.COOKIE_DURATION,
    keys: [OAUTH_CONFIG.COOKIE_KEY_1, OAUTH_CONFIG.COOKIE_KEY_2],
};
