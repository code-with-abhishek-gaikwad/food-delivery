import mongoose from "mongoose";

export const connectDB =async () =>{
    await mongoose.connect('mongodb+srv://abhigaikwad0508:050804@cluster0.s1o06.mongodb.net/food-del').then(()=>console.log("DB connected"));

}

//mongodb+srv://abhigaikwad0508:866896@cluster0.ckril.mongodb.net/food-del