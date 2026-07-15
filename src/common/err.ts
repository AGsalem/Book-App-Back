export const ISE=async(request,reply)=>{
return reply.status(500).send({"erorr":"Internal Server Error"})
}
export const ERR=async(request,reply)=>{
    return reply.code(401).send({"mess":"please enter name | pass dont enter empaty "})
}
export const ERRSCHEMA=async(request,reply)=>{
    return reply.code(400).send({"err":"Please Enter Username Bigger Than 8 Words And Password Bigger Than 8 Word & user OR buyer enter seller or buyer & nameofsearch without space"})
}
export const UORC=async(request,reply)=>{
    return reply.code(403).send({"err2":"pleasr enter user or sell  is 'user' or 'sell'","name in json":"uorc"})
}
export const ERRLOGIN=async(request,reply)=>{
    return reply.code(400).send({"log":"Please Enter Username Bigger Than 8 Words And Password Bigger Than 8 Word "})
}