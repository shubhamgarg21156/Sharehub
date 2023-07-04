import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DBConnection = () => {

    const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.o5u1gup.mongodb.net/?retryWrites=true&w=majority`
    try{
        mongoose.connect(MONGODB_URI, { useNewUrlParser : true});
        console.log("Database connected");
    }catch(error){
        console.error("Error while connecting with the database",error.message);
    }
}

export default DBConnection;