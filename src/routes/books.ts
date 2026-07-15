import fastify, { FastifyPluginAsync } from 'fastify';
import { createBook } from '../controller/books/create';
export const books: FastifyPluginAsync = async (fastify): Promise<void> => {
fastify.post("/new",createBook)
}