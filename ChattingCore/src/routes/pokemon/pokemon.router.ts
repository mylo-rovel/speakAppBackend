import express, {Router} from "express";
import { 
    httpGetRandomPokemon
 } from "./pokemon.controller.js";

export const pokemonRouter: Router = express.Router();

pokemonRouter.get("/random", httpGetRandomPokemon);
