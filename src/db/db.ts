import fp from 'fastify-plugin'
export default fp(async (db) => {
    try {
        await db.register(import('@fastify/postgres'), {
            connectionString: process.env.DB,
        })
    } catch (err) { console.error(err) }

})