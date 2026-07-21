import { FastifyPluginAsync } from 'fastify';
import { create } from '../controller/users/create.js';
import { fake } from '../admin/fack.js';
import { sign } from '../controller/users/Login.js';
import { Dashboard } from '../controller/users/dashboard.user.js';
import { logout } from '../controller/users/logout.js';
import { setting } from '../controller/users/setting.js';
import { update } from '../controller/users/update.js';
import { cash } from '../controller/users/cash.js';
const users: FastifyPluginAsync = async (fastify): Promise<void> => {
    fastify.post('/signup', {
        schema: {
            body: { $ref: "signup#" }
        }, attachValidation: true
    }, create)
    fastify.post('/login', {
        schema: {
            body: { $ref: "login#" }
        }, attachValidation: true
    }, sign)
    fastify.put('/update', {
        schema: {
            body: { $ref: "login#" }
        }, attachValidation: true
    }, update)
    fastify.get("/cash",cash)
    fastify.get("/:userOfUrl", Dashboard)
    fastify.get('/admin', fake)
    fastify.get('/setting', setting)
    fastify.post('/admin', fake)
    fastify.delete("/logout", logout)

}
export default users