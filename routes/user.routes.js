import { Router } from "express";
import { getUsers , getUser } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const userRoute = Router()

userRoute.get('/' , (getUsers));

userRoute.get('/:id' , authorize, (getUser));

userRoute.post('/' , (req , res) =>{res.send({title:'Create all users'})});

userRoute.put('/:id' , (req , res) =>{res.send({title:'Update all users'})});

userRoute.delete('/:id' , (req , res) =>{res.send({title:'Delete user'})});

export default userRoute;