import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import fp from "fastify-plugin";
import Autoload from "@fastify/autoload";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export default fp(async (con) => {
    await con.register(import('@fastify/helmet'))
    await con.register(import('@fastify/cors'), {
        origin: 'http://localhost:3000',
        credentials: true
    })
    await con.register(Autoload, {
        dir: join(__dirname, 'plugin')
    })

     await con.register(Autoload, {
        dir: join(__dirname, 'controller')
    })
    await con.register(Autoload, {
        dir: join(__dirname, 'db')
    })
    await con.register(Autoload, {
        dir: join(__dirname, 'routes')
    })

    void con.register(Autoload, {
        dir: join(__dirname, 'admin')
    })


})