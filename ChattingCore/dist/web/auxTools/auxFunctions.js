export const checkLoggedIn = (_, res, next) => {
    const isLoggedIn = true;
    if (!isLoggedIn) {
        return res.status(404).json({ error: 'You must login!' });
    }
    next();
    return res.status(200);
};
//* This is used in the middleware (in web/app.ts):
//? passport.use(new Strategy(AUTH_OPTIONS, verifyCallback))
export const verifyCallback = (accessToken, refreshToken, profile, done) => {
    console.log('Authenticating user');
    console.log({ accessToken, refreshToken });
    console.log('Google profile', profile);
    done(null, profile);
};
//* This is used in web/app.ts:
//? passport.serializeUser(serializeUserFn);
//! Save the session to the cookie
export const serializeUserFn = (user, done) => {
    console.log('\n\n\n\n serializeUser', user);
    done(null, user);
};
//* This is used in web/app.ts:
//? passport.deserializeUser(deserializeUserFn);
//! Read the session from the cookie
export const deserializeUserFn = (id, done) => {
    // User.findById(id).then(user => {
    //   done(null, user);
    // });
    console.log('\n\n\n\n deserializeUser', id);
    done(null, null);
};
