import { ISE } from "../../common/err"
export const logout = async (request, reply) => {
    try {
        reply.clearCookie("token",{httpOnly: true, secure: true, path:'/' })
        return reply.code(200).send({"message":"logout finsh"})
    } catch (err) {
        return ISE(request, reply)
    }
}