import fp from "fastify-plugin";
export default fp(async (fastify) => {
    fastify.addSchema({
        $id: "login",
        type: "object",
        required: ['username', 'password'],
        properties: {
            username: {
                type: "string",
                minLength: 8
            },
            password: {
                type: "string",
                minLength: 8
            }
        }
    }
    )
})

