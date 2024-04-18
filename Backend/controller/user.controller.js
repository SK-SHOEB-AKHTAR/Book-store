import User from "../model/user.model.js";
import bcrypt from 'bcryptjs';

//signup

export const signup = async(req,res)=>{
    try {
        const{fullname,email,password}=req.body;
        const user =await User.findOne({email})
        if(user){
            return res.status(400).json("user already exist")
        }
        const hashpassword = await bcrypt.hash(password,10)
        const createUser =new User({
            fullname:fullname,
            email:email,
            password:hashpassword
        })
       await createUser.save()
       res.status(201).json(" signup successfully")
        
    } catch (error) {
        console.log(error)
        res.status(500).json("internal server error")
    }
}

//Login

 export const login = async(req,res)=>{

    try {
       const {email,password} = req.body;
       const user = await User.findOne({email });
       const ismatch = await bcrypt.compare(password,user.password);

       if(!user || ismatch){
        res.status(404).json("invalid username or password")
       } 
       else{
          res.status(200).json({message:"Login successful",user:{
            _id:user._id,
            fullname:user.fullname,
            email:user.email

          }})
       }
    } catch (error) {
        console.log(error)
        res.status(500).json("internal server error")
    }

 }