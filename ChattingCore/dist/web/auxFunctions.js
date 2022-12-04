export const checkLoggedIn = (_, res, next) => {
    const isLoggedIn = true;
    if (!isLoggedIn) {
        return res.status(404).json({ error: 'You must login!' });
    }
    next();
    // return res.status(200)
};
