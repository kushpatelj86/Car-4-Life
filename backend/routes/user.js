import express from 'express';
import {db} from '../database/db.js'
const port = process.env.PORT || 8000;
const userrouter = express.Router()

userrouter.get("/",(req,res) =>{
    console.log("testing ");


    res.send({data: "User retrieved"})

    


})


userrouter.get("/get_user/:username",(req,res) =>{
    console.log("testing /get_user:username");
    const username = req.params.username;
    console.log("Username ", username)


    const sql_statement = "SELECT * FROM USER WHERE `username` = ?";

    db.query(sql_statement,[username], function (err, result) {
    if (err) 
    {

        return res.json({message: 'Something unexpected has occured '+err})
    }
    else
    {
                console.log("result")

        console.log(result[0])
        if(result.length !== 0)
        {
            return res.json({user : (result[0]) })
        }
        else
        {
            return res.json({fail:"User data failed to be retrieved"})

        }

    }
    
    
  })




    


})


userrouter.post("/signup",(req,res) =>{
    const sql_statement = "INSERT INTO USER (`username`, `password`,`first_name`,`last_name`,`phone_number`,`email`,`role`) VALUES (?, ?, ?, ?, ?, ?, ?)";
    console.log("req.body.username ",req.body.username );

    const values = [
        req.body.username,
        req.body.password,
        req.body.first_name,
        req.body.last_name,
        req.body.phone_number,
        req.body.email,
        req.body.role,
    ]

    db.query(sql_statement,values, function (err, result) {
    if (err) return res.json({message: 'Something unexpected has occured '+err})
    
    return res.json({success:"User added successfully"})
  })
    
})




userrouter.post("/update_user/:user_id", (req, res) => {
  const id = req.params.id;
  const sql =
    "UPDATE USER SET `username`=?, `email`=?, `age`=?, `gender`=? WHERE user_id=?";
  const values = [
    req.body.name,
    req.body.email,
    req.body.age,
    req.body.gender,
    id,
  ];
  db.query(sql, values, (err, result) => {
    if (err)
      return res.json({ message: "Something unexpected has occured" + err });
    return res.json({ success: "Student updated successfully" });
  });
});









userrouter.post("/login",(req,res) =>{
    console.log("testing ");


    


    const sql_statement = `SELECT * FROM USER WHERE username = ? AND password= ?`;

    const values = [
        req.body.username,
        req.body.password
    ]
    console.log(req.body.username)
    console.log(req.body.password)


     db.query(sql_statement,values, function (err, result) {
    if (err) 
    {

        return res.json({message: 'Something unexpected has occured '+err})
    }
    else
    {
        console.log(result)
        if(result.length !== 0)
        {
            return res.json({success:"User loggged in successfully"})
        }
        else
        {
            return res.json({fail:"Student failed to login"})

        }

    }
    
    
  })

    
})


userrouter.put("/",(req,res) =>{
    res.send({data: "User updated"})
})


userrouter.delete("/",(req,res) =>{
    res.send({data: "User deleted"})
})


export default userrouter;
