import cors, {CorsOptions} from "cors";
import morgan from "morgan";
import helmet from "helmet";
import express, {Express} from "express";
import { pokemonRouter } from "../routes/pokemon/pokemon.router.js";
// import { oauthRouter } from "../routes/oauth/oauth.router.js";
import { checkLoggedIn } from "../auxFunctions.js";
import passport from "passport";
import { Strategy } from 'passport-google-oauth20';
import { verifyCallback } from "../auxFunctions.js";
import * as dotenv from 'dotenv';
import cookieSession from 'cookie-session';


dotenv.config();

const config = {
    CLIENT_ID:      (process.env["CLIENT_ID"]) ? process.env["CLIENT_ID"] : '',
    CLIENT_SECRET:  (process.env["CLIENT_SECRET"]) ? process.env["CLIENT_SECRET"] : '',
    COOKIE_KEY_1:   (process.env["COOKIE_KEY_1"]) ? process.env["COOKIE_KEY_1"] : '',
    COOKIE_KEY_2:   (process.env["COOKIE_KEY_2"]) ? process.env["COOKIE_KEY_2"] : '',
    //? 1000ms 60s 60min 24hrs => 24 hours in milliseconds
    COOKIE_DURATION: 1000 * 60 * 60 * 24,
}
const AUTH_OPTIONS = {
    callbackURL: '/auth/google/callback',
    clientID: config.CLIENT_ID,
    clientSecret: config.CLIENT_SECRET
}

export const app: Express = express();

const whitelist = ["http://localhost:3000"];
const corsOptions: CorsOptions = {
    origin: function(origin, callback) {
        //? note that !origin is undefined if req comes from this same machine
        if (!origin || whitelist.indexOf(origin) !== -1){
            callback(null, true);
        }
        else{
            callback(new Error("Not allowed by CORS :o"))
        }
    }
};

app.use(cors(corsOptions));
app.use(morgan("combined"));
app.use(express.json());
app.use(helmet());

app.use(cookieSession({
    name: 'session',
    maxAge: config.COOKIE_DURATION,
    keys: [ config.COOKIE_KEY_1, config.COOKIE_KEY_2 ],
  }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback))
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


//? ---------------   ROUTES -------------------

//! route we want to protect
app.use('/api/pokemon', checkLoggedIn, pokemonRouter);

//? ---------------   OAUTH ROUTES -------------------
// app.use('/auth', oauthRouter);
//! route to start the process
app.get('/auth/google', passport.authenticate('google', {scope:['email']}));
app.get('/auth/failure', (_, res) => res.send('Failed to log in!'));
app.get('/auth/google/callback', 
  passport.authenticate('google', {
    failureRedirect: '/auth/failure',
    successRedirect: '/api/pokemon/random',
    session: true,
}), () => { console.log('Google called us back!'); });
app.get('/auth/logout', (req, res) => {
    req.logout({ keepSessionInfo: true }, () => {}); //Removes req.user and clears any logged in session
    return res.redirect('/api/pokemon');
});