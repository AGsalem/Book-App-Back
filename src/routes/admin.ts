import { FastifyPluginAsync } from 'fastify';
import { admin } from '../admin/admin';
const adminRoute: FastifyPluginAsync = async (ad): Promise<void> => {
    ad.post("/page/admin", admin)
}
export default adminRoute 