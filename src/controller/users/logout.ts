import { ISE } from "../../common/err.js"
export const logout = async (request, reply) => {
    try {
        reply.clearCookie("token",{httpOnly: true, secure: true, path:'/' })
        return reply.code(200).send({"message":"logout finsh"})
    } catch (err:any) {
        return ISE(request, reply)
    }
}