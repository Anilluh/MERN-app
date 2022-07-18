const express=require('express');
const app=express();
const colours=require('colours')
const dotenv=require('dotenv').config();
const connectDB=require('./config/db')
const port = process.env.PORT || 5000;

connectDB()

app.use(express.json());
app.use(express.urlencoded({extended:false}));
 
app.use('/api/goals',require('./routes/goalRoutes'))

app.listen(port,()=>{
    console.log(`Port started on ${port}`);
});