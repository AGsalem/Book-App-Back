import fp from 'fastify-plugin'
export default fp(async (fastify) => {
    fastify.register(import("@fastify/cookie"), {
        secret: process.env.TOKEN,
        hook: 'onRequest',
        // sign: { expiresIn: '1h' },
        parseOptions: {}
    })
})