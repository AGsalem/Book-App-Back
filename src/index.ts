import fastify from "fastify";
import connection from "./connection.js";

import 'dotenv/config'
const app = fastify({
    logger: true
})
await app.register(connection)
const port: number = Number(process.env.PORT || 5000);
app.ready(() => {
    console.log(app.printRoutes())
})
try {
    app.listen({ port: port ,host:"0.0.0.0"})
    console.log(`port in ${port}`)
} catch (err) {
    console.log(err)
}
