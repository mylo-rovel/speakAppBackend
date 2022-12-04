//! list of allowed servers
const whitelist = [
    "http://localhost:3000"
];
export const corsOptions = {
    origin: function (origin, callback) {
        //? note that !origin is undefined if req comes from this same machine
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by CORS :o"));
        }
    }
};
