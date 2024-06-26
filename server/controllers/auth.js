import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import { createError } from "../error.js";

export const signUp =async (req,res,next)=>{

    try{

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const  newUser = new User({...req.body, password:hash  });
        await newUser.save();
        res.status(200).send("user created successfully");

    }catch(err){
    next(err);

    }
}

export const signIn =async (req,res,next)=>{

    try{

const user = await User.findOne({name:req.body.name});
if(!user) return next(createError(404, "User not found"));

    }catch(err){
    next(err);

    }
}
