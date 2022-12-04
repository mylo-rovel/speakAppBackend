import { getRandomPokemon } from "../../models/pokemon/pokemon.model.js";
export const httpGetRandomPokemon = async (_, res) => {
    console.log("Obteniendo random pokemon");
    const modelResponse = await getRandomPokemon();
    return res.status(200).json(modelResponse);
};
