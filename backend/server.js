const express=require('express');
const app=express();
const dotenv=require('dotenv').config();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
 
app.use('/api/goals',require('./routes/goalRoutes'))

app.listen(port,()=>{
    console.log(`Port started on ${port}`);
});