import express from "express";
import { httpGetRandomPokemon } from "./pokemon.controller.js";
export const pokemonRouter = express.Router();
pokemonRouter.get("/random", httpGetRandomPokemon);
