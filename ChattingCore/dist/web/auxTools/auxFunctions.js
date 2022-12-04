export const checkLoggedIn = (_, res, next) => {
    const isLoggedIn = true;
    if (!isLoggedIn) {
        return res.status(404).json({ error: 'You must login!' });
    }
    next();
    return res.status(200);
};
export const verifyCallback = (accessToken, refreshToken, profile, done) => {
    console.log('Authenticating user');
    console.log({ accessToken, refreshToken });
    console.log('Google profile', profile);
    done(null, profile);
};
