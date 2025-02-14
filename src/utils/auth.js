import { hash,compare } from "bcrypt";

async function hashPassword(password){

    const hashedPass=await hash(password,12)
    return hashedPass
}

async function verifyPassword(password,hashedPass)
{
    const isValid=await compare(password,hashedPass);
    return isValid
}
export{hashPassword,verifyPassword}