import mongoose from "mongoose";



const bookSchema = mongoose.Schema({
    name:String,
    title:String,
    price:Number,
    catagory:String,
    image:String
    
})

const books = mongoose.model('Books',bookSchema)

export default books;