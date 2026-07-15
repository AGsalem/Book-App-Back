import fp from "fastify-plugin";
export default fp(async (fastify) => {
    fastify.addSchema({
        $id: "signup",
        type: "object",
        required: ["username", "password","uorc"],
        properties: {
            username: {
                type: "string",
                minLength:8
            },
            password: {
                type: "string",
                minLength:8,
            },
            uorc:{
                enum:["seller","buyer","seller&buyer"]
            },
            nameofsearch:{
                type:"string",
                pattern:"^\\S+$"
            },
            settings: {
                type: "object",
                additionalProperties: false,
            },
        },
    })
})
// Ahmed Gamal
// 12345678