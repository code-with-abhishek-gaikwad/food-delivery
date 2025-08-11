import mongoose from "mongoose";

export const connectDB =async () =>{
    await mongoose.connect('mongodb+srv://abhistack:86689669@cluster0.s27ei0y.mongodb.net/food-del').then(()=>console.log("db connected"));
}

//mongodb+srv://abhistack:<db_password>@cluster0.s27ei0y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0