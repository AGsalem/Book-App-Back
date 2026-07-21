import { ISE } from '../../common/err.js'
export const Dashboard = async (request, reply) => {
    const { userOfUrl } = request.params
    try {
        await request.cookies.token
        const Vtoken = await request.jwtVerify()
        const name = await Vtoken.username;
        const nameOf = await Vtoken.nameofsearch
        if(nameOf==userOfUrl){
        const findUser = await request.server.pg.query("SELECT nameofsearch,username,userorsells FROM users WHERE username=$1 ", [name])
        const [row] = await findUser.rows
        const { nameofsearch } = row;
        const { userorsells } = row
        if ((nameOf == nameofsearch)) {
            return reply.send({ 'User': `${name}`,"uorc":`${userorsells}` })
        }
        else {
            return reply.send({ "User Page Not Login": `${userOfUrl} Please Go Login page or Singup page  To see more information` })
        }}
        else{
            return reply.send({"notTrueName":` 404 page not found we auto  go /${nameOf}`,"name":`${nameOf}`})
        }
    } catch (err:any) {
        if (err.code == "FST_JWT_NO_AUTHORIZATION_IN_COOKIE") {
            return reply.code(403).send({ 'error': `${userOfUrl}  page Please Go Login page or Singup page To see more information` })
        }
        // console.error(err)

        return ISE(request, reply)
    }
    //    return reply.send({"A":`${userOfUrl}`})
}
