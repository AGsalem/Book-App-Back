import fp from "fastify-plugin";
import { userAuth } from "../controller/users/auth.js";
export default  fp(async(fastify)=>{
fastify.get('/' ,userAuth)})