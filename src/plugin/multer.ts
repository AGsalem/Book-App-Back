import fp from 'fastify-plugin';
export default fp(async (fastify) => {
    fastify.register(import("@fastify/multipart"), {
        limits: {
             fileSize:10000000,
        }
    })
})