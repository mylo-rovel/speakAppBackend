import express, {Express} from "express";
//? security dependencies
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { corsOptions } from "./auxTools/auxSecuritySetup.js";
//? routers dependencies
import { usersRouter } from "../routes/users/users.router.js";

export const app: Express = express();

app.use(cors(corsOptions));
app.use(morgan("combined"));
app.use(express.json());
app.use(helmet());

//! (checkLoggedIn) => route we want to protect
//? --------------------   ROUTES   --------------------
app.use('/api/users', usersRouter)