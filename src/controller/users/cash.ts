import { ISE } from "../../common/err.js"

export const cash = async (request, reply) => {
    try {
        await request.cookies.token
        const retoken = await request.jwtVerify()
        const reid = await retoken.id
        const findCash = await request.server.pg.query("SELECT cash FROM users WHERE id=$1", [reid])
        const findCountId=await request.server.pg.query("SELECT COUNT(name) FROM books WHERE id_user=$1",[reid])
        const [nam]=findCountId.rows
        const name=nam.count
        const [row] = await findCash.rows
        const cash=await row.cash
        return reply.send({ "cash":cash,'count':name})
    } catch (err) {
        return ISE(request, reply)
    }
}