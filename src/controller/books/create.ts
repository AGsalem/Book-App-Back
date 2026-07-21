import { ISE,ERRLOGIN } from '../../common/err.js';
export const createBook = async (request, reply: any) => {
    try {
        
        const coo = request.cookies.token
        const Vtoken = await request.jwtVerify()
        const { name, sell,type, discription } = request.body as any;
        const book = await request.server.jwt.sign({ name, sell, type, discription })
        reply.cookie("book", book, { httpOnly: true, secure: true, path: "/" })
        return reply.send({ "res": "Create Book finsh", name, sell, type, discription })
    } catch (err: any) {
        return ISE(request, reply)
    }
}
// const file = await request.file()
// const save = await path.join(__dirname, '../../upload', file.filename)
// await pipeline(file.file, fs.createWriteStream(save))
// import { join, dirname } from 'node:path'
// import { fileURLToPath } from 'node:url'
// import path from "node:path"
// import { pipeline } from "node:stream/promises";
// import fs from 'fs';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);