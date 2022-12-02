import express, {Router} from "express";
import { 
    httpGetRandomPokemon
 } from "./oauth.controller.js";

export const oauthRouter: Router = express.Router();

oauthRouter.get("/", httpGetRandomPokemon);
