import { createClient } from "redis";
// const redisClient = redis.createClient({url: process.env.REDIS_URL});
const redisClient = createClient();
await redisClient.connect(); // needed
redisClient.on("connect", function () {
    console.log("redis conectado");
});
redisClient.on('error', (err) => {
    console.log('Redis Client Error', err);
});
const redisPrueba = async () => {
    await redisClient.set("prueba", "redis_ready_&_online");
    const resultado = await redisClient.get("prueba");
    console.log(resultado);
};
redisPrueba();
export default redisClient;
