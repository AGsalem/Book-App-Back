import fp from 'fastify-plugin'
export default fp(fa => {
    fa.register(import("@fastify/jwt"), {
        secret: 'supersecret',
        cookie: {
            cookieName: 'token',
            signed: false
        }
    })
})