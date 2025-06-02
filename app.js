import express from 'express'

import { PORT } from './config/env.js';

import userRoute from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import connectToDatabase from './datab[ase/mongodb.js';


const app = express();  

app.use('/api/v1/auth' , authRouter);
app.use('/api/v1/users' , userRoute);
app.use('/api/v1/subscriptions' , subscriptionRouter);


app.get('/' ,(req , res) =>{
    res.send('Welcome to the Subsciption Tracker API Home page')
});


app.listen( PORT , async ()=>{
    
    console.log(`Subsciption Tracker API is running on http://localhost:${PORT}`);    
    connectToDatabase()
} )

export default app;
 