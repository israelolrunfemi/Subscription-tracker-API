import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../config/env.js';
import User from '../models/user.model.js';
const authorize = async(req , res , next) =>{
    try {
        let token;
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            token = req.headers.authorization.split(' ')[1];

        }
        if(!token){
            const error = new Error("Unauthorized");
            error.statusCode = 401;
            throw error;
        }
        const decoded = jwt.verify(token , JWT_SECRET_KEY);

        const user = await User.findById(decoded.userId);

        if(!user){
           return res.status(401).json({            
            success:false,
            message:"Unauthorized",
            error:"User not found"
           })
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({
            success:false,
            message:"Unauthorized",
            error:error.message
        })
        
    }
}

export default authorize