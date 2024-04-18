import mongoose from "mongoose";

const userschema = mongoose.Schema({
    fullname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
})

const User = mongoose.model("User",userschema)

export default User;