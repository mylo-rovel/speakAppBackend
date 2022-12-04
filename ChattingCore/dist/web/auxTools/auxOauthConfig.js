import * as dotenv from 'dotenv';
dotenv.config();
console.log(`Testing load of env variables \n${process.env['ENV_TESTING']}\n`);
//? 1000ms 60s 60min 24hrs => 24 hours in milliseconds
const tokenDuration = 1000 * 60 * 60 * 24;
export const OAUTH_CONFIG = {
    CLIENT_ID: (process.env["CLIENT_ID"]) ? process.env["CLIENT_ID"] : '',
    CLIENT_SECRET: (process.env["CLIENT_SECRET"]) ? process.env["CLIENT_SECRET"] : '',
    COOKIE_KEY_1: (process.env["COOKIE_KEY_1"]) ? process.env["COOKIE_KEY_1"] : '',
    COOKIE_KEY_2: (process.env["COOKIE_KEY_2"]) ? process.env["COOKIE_KEY_2"] : '',
    COOKIE_DURATION: tokenDuration,
};
//? This is used in the middleware:
//? passport.use(new Strategy(AUTH_OPTIONS, verifyCallback))
export const AUTH_OPTIONS = {
    callbackURL: '/auth/login/callback',
    clientID: OAUTH_CONFIG.CLIENT_ID,
    clientSecret: OAUTH_CONFIG.CLIENT_SECRET
};
