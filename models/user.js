import mongoose  from "mongoose"
    

const schema = new mongoose.Schema({
    email:{
        type:String,
       
        require:true,
    },
    name:{
        type:String,
        unique:true,
        require:true,
    },
    password:{
        type:String,
        select:false,
        require:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
       
    }
})

export const User = mongoose.model("User",schema)