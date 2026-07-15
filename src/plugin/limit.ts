import fp from "fastify-plugin";
export default fp(async (limit) => {
    await limit.register(import('@fastify/rate-limit'), {
        global: true,
        max:50,
        ban: 1,
        timeWindow: 60 * 1000,
        hook: 'preHandler',
        addHeaders: {
            'x-ratelimit-limit': true,
            'x-ratelimit-remaining': true,
            'x-ratelimit-reset': true,
            'retry-after': true
        }
    })
    await limit.setNotFoundHandler((req, reply) => {
        reply.status(404).send({ "erorr": "page not found please go /" })
    })
})


