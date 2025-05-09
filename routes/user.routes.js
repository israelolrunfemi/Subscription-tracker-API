import { Router } from "express";

const userRoute = Router()

userRoute.get('/' , (req , res) =>{res.send({title:'Get all users'})});

userRoute.get('/:id' , (req , res) =>{res.send({title:'Get a user'})});

userRoute.post('/' , (req , res) =>{res.send({title:'Create all users'})});

userRoute.put('/:id' , (req , res) =>{res.send({title:'Update all users'})});

userRoute.delete('/:id' , (req , res) =>{res.send({title:'Delete user'})});

export default userRoute;