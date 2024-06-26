import express from 'express';
import mongoose from'mongoose';
import dotenv from 'dotenv';
import userRoutes from "./routes/users.js"
import videoRoutes from "./routes/users.js"
import commentRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"



const app = express();

dotenv.config();

const connect = ()=>{
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("connected to MongoDB");
    })
    .catch((err)=>{
        // console.log(err)
        throw err;
    });

}

app.use("/api/users",userRoutes)
app.use("/api/video",videoRoutes)
app.use("/api/comment",commentRoutes)
app.use("/api/auth",authRoutesRoutes)



app.listen(8800,()=>{
    connect();
    console.log("connected to port 8800");
})

