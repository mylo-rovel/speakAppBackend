export const checkLoggedIn = (_, res, next) => {
    const isLoggedIn = true;
    if (!isLoggedIn) {
        return res.status(404).json({ error: 'You must login!' });
    }
    next();
    return res.status(200);
};
//! Here we can access to the user data so we can store it
//* This is used in the middleware (in web/app.ts):
//? passport.use(new Strategy(AUTH_OPTIONS, verifyCallback))
export const verifyCallback = (accessToken, refreshToken, profile, done) => {
    var _a;
    console.log('Authenticating user');
    console.log({ accessToken, refreshToken });
    // console.log('Google profile', profile);
    const userEmailData = profile.emails;
    if (userEmailData !== undefined) {
        const emailToSave = (_a = userEmailData[0]) === null || _a === void 0 ? void 0 : _a.value;
        console.log(emailToSave);
    }
    done(null, profile);
};
//* This is used in web/app.ts:
//? passport.serializeUser(serializeUserFn);
//! Save the session to the cookie
export const serializeUserFn = (user, done) => {
    // console.log('\n\n\n\n serializeUser', user);
    done(null, user);
};
//* This is used in web/app.ts:
//? passport.deserializeUser(deserializeUserFn);
//! Read the session from the cookie
export const deserializeUserFn = (id, done) => {
    // User.findById(id).then(user => {
    //   done(null, user);
    // });
    // console.log('\n\n\n\n deserializeUser', id);
    done(null, null);
};
