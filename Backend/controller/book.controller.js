import books from "../model/book.model.js";

export const getBook= async (req,res)=>{
    try {

        const book = await books.find();
        console.log(book);
        res.status(200).json(book)
        
    } catch (error) {
        console.log("error:",error)
        res.status(500).json(error)
    }
}