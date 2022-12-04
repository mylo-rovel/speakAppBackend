import express from "express";
//? security dependencies
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { corsOptions } from "./auxTools/auxExpressSetup.js";
//? oauth dependencies
import passport from "passport";
import { OAUTH_CONFIG, AUTH_OPTIONS } from "./auxTools/auxOauthConfig.js";
import { Strategy } from 'passport-google-oauth20';
import cookieSession from 'cookie-session';
import { verifyCallback } from "./auxTools/auxFunctions.js";
import { checkLoggedIn } from "./auxTools/auxFunctions.js";
//? routers dependencies
import { pokemonRouter } from "../routes/pokemon/pokemon.router.js";
import { oauthRouter } from "../routes/oauth/oauth.router.js";
export const app = express();
app.use(cors(corsOptions));
app.use(morgan("combined"));
app.use(express.json());
app.use(helmet());
app.use(cookieSession({
    name: 'session',
    maxAge: OAUTH_CONFIG.COOKIE_DURATION,
    keys: [OAUTH_CONFIG.COOKIE_KEY_1, OAUTH_CONFIG.COOKIE_KEY_2],
}));
app.use(passport.session());
passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));
app.use(passport.initialize());
// Save the session to the cookie
passport.serializeUser((user, done) => {
    console.log('\n\n\n\n serializeUser', user);
    done(null, user);
});
// Read the session from the cookie
passport.deserializeUser((id, done) => {
    // User.findById(id).then(user => {
    //   done(null, user);
    // });
    console.log('\n\n\n\n deserializeUser', id);
    done(null, null);
});
//? ----------------------   ROUTES   --------------------------------
//! route we want to protect
// app.use('/', (_, res) => res.redirect('/api/pokemon'))
app.use('/api/pokemon', checkLoggedIn, pokemonRouter);
app.use('/auth', oauthRouter);
