import fp from 'fastify-plugin'
export default fp(fa => {
    fa.register(import("@fastify/jwt"), {
        secret:"asdfghjklqwertyuiop134567890zxcvbnmsdfghj",
        cookie: {
            cookieName: 'token',
            signed: false
        }
    })
})