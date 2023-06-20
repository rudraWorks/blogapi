import { Schema,model } from "mongoose";

const usersSchema = Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    
    password:{
        type:String,
        required:true
    }
},{
    collection:'users',
    timestamps:true
})

export default model('User',usersSchema)