import { FastifyPluginAsync } from 'fastify';
import { create } from '../controller/users/create';
import { fake } from '../admin/fack';
import { sign } from '../controller/users/Login';
import { Dashboard } from '../controller/users/dashboard.user';
import { logout } from '../controller/users/logout';
import { setting } from '../controller/users/setting';
import { update } from '../controller/users/update';
import { cash } from '../controller/users/cash';
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