const mongoose=require('mongoose');

const schema=mongoose.Schema({
    text:{
        type:String,

    }
},
{
    timestamps:true,
})
module.exports=mongoose.model('Goal',schema)