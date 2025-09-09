import { registerUser } from "../services/user-service.js";

export const home = (request, response)=>{
    response.send('<h1>URL Shortener Project </h1>');
}
export const login = (request, response)=>{
    response.send('<h1> Login </h1>');
}
export const register = async (request, response)=>{
    const userInfo = request.body;
    try{
    const doc = await registerUser(userInfo);
    response.json({message:'Register SuccessFully ', id: doc._id});
    }
    catch(err){
        response.json({error:'Something Went Wrong During Register', err:err});
        console.log('Register Fail ', err);
    }
    // console.log('User info ', userInfo);
    // response.send('<h1> Register </h1>');
}