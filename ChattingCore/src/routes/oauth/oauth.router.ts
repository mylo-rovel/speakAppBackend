import express, {Router} from "express";
import passport from "passport";

export const oauthRouter: Router = express.Router();

//! route to start the process
oauthRouter.get('/login', passport.authenticate('google', {scope:['email']}));

oauthRouter.get('/failure', (_, res) => res.send('Failed to log in!'));

oauthRouter.get('/login/callback', 
  passport.authenticate('google', {
    failureRedirect: '/auth/failure',
    successRedirect: '/api/pokemon/random',
    session: true,
}), () => { console.log('Google called us back!'); });

oauthRouter.get('/logout', (req, res) => {
    console.log("\n\n\n\nlogout")
    req.logout({ keepSessionInfo: true }, () => {}); //Removes req.user and clears any logged in session
    return res.redirect('/');
});
