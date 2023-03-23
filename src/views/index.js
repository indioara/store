import  express  from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt"
import bodyParser from "body-parser";
import  jwt  from "jsonwebtoken";
import User from "./user.js"
import {secret} from "./config.vue"

const generateAccessToken = (id) => {
    const payload = {
      id
    }
    return jwt.sign(payload, secret, {expiresIn: "24h"})
  }

const PORT = 5000;
const DB__URL = "mongodb+srv://user:user@cluster0.nnk0qlv.mongodb.net/?retryWrites=true&w=majority"

app.post("/reg", async (req, res)=>{
    const errors = validationResult(req)
    const {login, pas} = req.body
    
    if(!errors.isEmpty()){
      return res.status(404).json({message:"ошибка при регистрации", errors: errors.array()})
    }
    
    const candidat = await Post.findOne({login})
  
    if(candidat){
      return res.status(404).json({message: "пользователь с таким именем уже существует"})
    }
  
    const hashPassword = bcrypt.hashSync(pas, 7)
    const user = new Post({login, pas: hashPassword})
    await user.save()
    
    res.status(200).json({message: "зарегистрирован"})
})
