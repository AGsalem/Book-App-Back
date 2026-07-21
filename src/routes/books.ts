import { FastifyPluginAsync } from 'fastify';
import { createBook } from '../controller/books/create.js';
const books: FastifyPluginAsync = async (fastify): Promise<void> => {
    fastify.post("/new", {
        schema: {
            body: { $ref: "books#" }
        }
    }, createBook)
};
export default books
