import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
const app = express();
import cors from 'cors'
import bookRoute from './route/book.route.js';
import userrout from './route/user.rout.js'
// import path from 'path'

dotenv.config();

const PORT = process.env.PORT || 8003;

app.use(cors());
app.use(express.json())


const uri = process.env.MongodbURI;



// try {
//     mongoose.connect(uri)
//   console.log("connected......")
// } catch (error) {
//     console.log(error)
    
// }

const conectdb = async()=>{
    await mongoose.connect(uri)
    console.log("mongo atlas connected")
} 
conectdb();

// routessss

app.use('/book',bookRoute);
app.use('/user',userrout);

// deployement  

// if(process.env.NODE_env === 'production'){
//     const dirpath= path.resolve()
//     app.use(express.static('frontend/dist'))
//     app.get("*",(req,res)=>{
//         res.sendFile(path.resolve(dirpath,'frontend','dir','index.html'))
//     })
// }



app.listen(PORT,()=>{
    console.log(`Server is started in port ${PORT}`);
})