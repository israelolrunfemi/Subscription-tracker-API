import express from 'express'

import { PORT } from './config/env.js';

const app = express();  

app.get('/' ,(req , res) =>{
    res.send('Welcome to the Subsciption Tracker API')
});


app.listen( PORT , ()=>{
    console.log(`Subsciption Tracker API is running on http://localhost:${PORT}`);    
} )

export default app;
 