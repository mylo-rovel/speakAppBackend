import { createClient } from "redis";
// const redisUrl = process.env["REDIS_URL"] || '';
// const redisClient = createClient({url: redisUrl});
export const redisClient = createClient();
await redisClient.connect(); // needed
redisClient.on("connect", function () {
    console.log("redis conectado");
});
redisClient.on('error', (err) => {
    console.log('Redis Client Error', err);
});
export const redisPruebaInicial = async () => {
    const resultadoEsperado = 'Mensaje obtenido de Redis: Redis conectado y funcionando. Ready & online';
    await redisClient.set("pruebaInicialDeFuncionamiento", resultadoEsperado);
    const resultado = await redisClient.get("pruebaInicialDeFuncionamiento");
    console.log('\n', resultado);
};
