import express from 'express';
import db from '../database/db.js'
const port = process.env.PORT || 8000;
const userrouter = express.Router()

userrouter.get("/",(req,res) =>{
    res.send({data: "Here is your User Info"})
})


userrouter.post("/",(req,res) =>{
    sql = "INSERT INTO USER (`username`, `password`,`first_name`,`last_name`,`phone_number`,`email`,`role`) VALUES (?, ?, ?, ?, ?, ?, ?)";
})


userrouter.put("/",(req,res) =>{
    res.send({data: "User updated"})
})


userrouter.delete("/",(req,res) =>{
    res.send({data: "User deleted"})
})


export default userrouter;
