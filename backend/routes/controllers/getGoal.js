const asyncHandler=require('express-async-handler');

// Method GET /api.goals
const getGoals=asyncHandler( async (req,res)=>{
    res.send('getGoals');
})

// Method POST /api.goals
const setGoals= asyncHandler( async (req,res)=>{
    // console.log(req.body);
    if(!req.body.text){
        res.status(400);
    throw new Error('Please add a text field');
    }
    else{
        res.status(200).json({messgae:`Message recieved ${req.body.text}`});
    }
})

// Method PUT /api.goals/:id
const updateGoals=asyncHandler( async (req,res)=>{
    res.send(`Update Goal of id ${req.params.id}`);
})

// Method DELETE /api.goals/:id
const deleteGoals=asyncHandler( async (req,res)=>{
    res.send(`Delete Goal of id ${req.params.id}`);
})

module.exports={
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}