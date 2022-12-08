import express, {Express} from "express";
//? security dependencies
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { corsOptions } from "./auxTools/auxSecuritySetup.js";
//? oauth dependencies
import { deserializeUserFn, serializeUserFn, verifyCallback } from "./auxTools/auxFunctions.js";
import { COOKIE_SESSION_SETUP, AUTH_OPTIONS } from "./auxTools/auxOauthConfig.js";
import { checkLoggedIn } from "./auxTools/auxFunctions.js";
import { Strategy } from 'passport-google-oauth20';
import cookieSession from 'cookie-session';
import passport from "passport";
//? routers dependencies
import { pokemonRouter } from "../routes/pokemon/pokemon.router.js";
import { oauthRouter } from "../routes/oauth/oauth.router.js";
import { messagesRouter } from "../routes/messages/messages.router.js";

export const app: Express = express();

app.use(cors(corsOptions));
app.use(morgan("combined"));
app.use(express.json());
app.use(helmet());
app.use(cookieSession(COOKIE_SESSION_SETUP));
app.use(passport.session());

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback))
app.use(passport.initialize());

//? Save the session to the cookie
passport.serializeUser(serializeUserFn);

//? Read the session from the cookie
passport.deserializeUser(deserializeUserFn);


//! (checkLoggedIn) => route we want to protect
//? --------------------   ROUTES   --------------------
app.use('/auth', oauthRouter);
app.use('/messages', messagesRouter)
app.use('/api/pokemon', checkLoggedIn, pokemonRouter);