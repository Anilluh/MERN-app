const { Console } = require('console');
const asyncHandler=require('express-async-handler');
const GOAL=require('../../models/goalModel')
// Method GET /api.goals
const getGoals=asyncHandler( async (req,res)=>{
    const goals=await GOAL.find();
    res.status(200).json(goals);
})

// Method POST /api.goals
const setGoals= asyncHandler( async (req,res)=>{
    // console.log(req.body);
    if(!req.body.text){
        res.status(400);
    throw new Error('Please add a text field');
    }
    else{
        const goals=await GOAL.create({text:req.body.text,})
        res.status(200).json({messgae:`Message recieved ${goals}`})
    }
})

// Method PUT /api.goals/:id
const updateGoals=asyncHandler( async (req,res)=>{
   const goals=await GOAL.findById(req.params.id)
   if(!goals){
    res.status(400);
    throw new Error("id not found");
   }
   else{
    console.log('id found');
    const updatedGoal=await GOAL.findByIdAndUpdate(req.params.id,req.body,{new:true});
    // console.log(updateGoals);
    res.status(200).json(updateGoals)
   }
})

// Method DELETE /api.goals/:id
const deleteGoals=asyncHandler( async (req,res)=>{
    const goals=await GOAL.findById(req.params.id)
   if(!goals){
    res.status(400);
    throw new Error("id not found");
   }
   else{
    // console.log('id found');
    goals.remove();
    // const deletedGoal=await GOAL.remove(id: req.params.id);
    // console.log(updateGoals);
    // res.status(200).json(deleteGoals)
    res.send('deleted')
   }
})

module.exports={
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}