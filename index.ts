import fastify from "fastify";
import connection from "./src/connection";

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
    app.listen({ port: port })
    console.log(`port in ${port}`)
} catch (err) {
    console.log(err)
}
