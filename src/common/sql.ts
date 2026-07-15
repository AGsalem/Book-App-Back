export const users = async (request, reply) => {
    const allusers = await request.server.pg.query("SELECT * FROM users");
    const a = allusers.rows
    if (a.lenght === 0) {
        return reply.code(200).send("no such users")
    } else {
        return a
    }
}
export const book = async (request, reply) => {
    const allbook = await request.server.pg.query("SELECT * FROM books")
    const a = allbook.rows
    if (allbook.rows.lenght === 0) {
        return reply.code(200).send("no such books")

    } else {
        return a
    }
};
export const buy = async (request, reply) => {
    const allbuy = await request.server.pg.query("SELECT * FROM buy")
    const a = allbuy.rows
    if (allbuy.rows.lenght === 0) {
        return reply.code(200).send("no such buy")

    } else {
        return a
    }
}
