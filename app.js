import express from 'express'

import { PORT } from './config/env.js';

import userRoute from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import connectToDatabase from './database/mongodb.js';
import errorMiddleware from './middlewares/error.middleware.js';
import e from 'express';
import cookieParser from 'cookie-parser';


const app = express();  

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser())


app.use('/api/v1/auth' , authRouter);
app.use('/api/v1/users' , userRoute);
app.use('/api/v1/subscriptions' , subscriptionRouter);



app.use(errorMiddleware);

app.get('/' ,(req , res) =>{
    res.send('Welcome to the Subsciption Tracker API Home page')
});


app.listen( PORT , async ()=>{
    
    console.log(`Subsciption Tracker API is running on http://localhost:${PORT}`);    
    connectToDatabase()
} )

export default app;
 