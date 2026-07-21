import fp from 'fastify-plugin'
export default fp(async (db) => {
    try {
        await db.register(import('@fastify/postgres'), {
            connectionString: process.env.DB,
        })
    } catch (err:any) { console.error(err) }

})