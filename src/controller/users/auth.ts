import { ISE } from "../../common/err";
export const userAuth = async (request, reply) => {
    try {
        const coo = request.cookies.token
        const Vtoken = await request.jwtVerify()
        const uNameOfVtoken = await Vtoken.username
        const  namesearch =await Vtoken.nameofsearch 
        const vUsers = await request.server.pg.query("SELECT nameofsearch FROM users WHERE username=$1 ", [uNameOfVtoken])
        const [nameOfVtoken] = await vUsers.rows
        const { nameofsearch}= await nameOfVtoken
        if (coo.lenght === 0) {
            return reply.send({ "error": "welcom" })
        } else if (nameofsearch === namesearch) {
            return reply.send({ "mes": `/${nameofsearch} ` })
        }
        else {
            return ISE(request, reply)
        }
    } catch (err) {
        console.error(err)
        if (err.code == "FST_JWT_NO_AUTHORIZATION_IN_COOKIE") {
            return reply.code(403).send({ 'error': `  page Please Go Login page or Singup page To see more information` })
        }
        return reply.status(200).send({ "message": "welcom to book app" })
    }
}