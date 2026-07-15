import { ISE } from "../../common/err"
export const createBook = async (request, reply) => {
    try {
        const { name, sell, type, discription, created_at } = request.body as any
    } catch (err) {
        return ISE(request, reply)
    }
}