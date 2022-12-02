import cors, {CorsOptions} from "cors";
import morgan from "morgan";
import express, {Express} from "express";
import { pokemonRouter } from "../routes/pokemon/pokemon.router.js";
import { oauthRouter } from "../routes/oauth/oauth.router.js";
import { checkLoggedIn } from "./auxFunctions.js";

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

app.use('/api/pokemon', checkLoggedIn, pokemonRouter);
app.use('/auth/callback', oauthRouter);

