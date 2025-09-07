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


userrouter.post("/signup", (req, res) => {
    const sql_statement = `
        INSERT INTO USER 
        (username, password, first_name, last_name, email, role) 
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    const values = [
        req.body.username,
        req.body.password,
        req.body.first_name,
        req.body.last_name,
        req.body.email,
        req.body.role, 
    ];

    db.query(sql_statement, values, function (err, result) {
        if (err) return res.json({ message: 'Something unexpected occurred: ' + err });
        return res.json({ success: "User added successfully" });
    });
});




userrouter.post("/update_user/:user_id", (req, res) => {
  console.log("Update called")
  const vals = []
  const fields = []
  
  let erroroccured = false
  console.log("Params:", req.params)
  console.log("Body:", req.body)


  if(req.body.first_name){

    vals.push(req.body.first_name)
    fields.push('`first_name`=?')


    let sql = "UPDATE USER SET `first_name`=? WHERE user_id=?";


    db.query(sql, [req.body.first_name, req.params.user_id], (err, result) => {
    if (err)
    {
     erroroccured = true;

    }

    
    });
  }

  if(req.body.last_name){
    console.log("query being called")
    vals.push(req.body.last_name)
    fields.push('`last_name`=?')

    let sql = "UPDATE USER SET `last_name`=? WHERE user_id=?";

    db.query(sql, [req.body.last_name, req.params.user_id], (err, result) => {
    if (err)
    {
      erroroccured = true;

    }
    
    });
  }

  if(req.body.phone_number){
    vals.push(req.body.phone_number)
    fields.push("`phone_number`=?")


    let sql = "UPDATE USER SET `phone_number`=? WHERE user_id=?";

    db.query(sql, [req.body.phone_number, req.params.user_id], (err, result) => {
    if (err)
    {
           erroroccured = true;


    }
    
    });
  }


  vals.push(req.params.user_id); // Assuming user_id is in params

  if(erroroccured)
  {
    return res.json({ message: "Error updating user: " + err });
  }
  else
  {
    console.log("Being returned")
    return res.json({ success: "Student updated successfully" });

  }


});









userrouter.post("/login",(req,res) =>{
    console.log("testing ");


    


    let sql_statement = `SELECT * FROM USER WHERE username = ? AND password= ?`;

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





userrouter.get("/get_profile/:user_id",(req,res) =>{
    console.log("/get_profile/:user_id");
    const userid = Number(req.params.user_id);
    console.log("userid ", typeof(userid))


    const sql_statement = "SELECT * FROM USER WHERE `user_id` = ?";

    db.query(sql_statement,[userid], function (err, result) {
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

            const sql_statement2 = "SELECT * FROM DRIVER_PROFILE WHERE user_id = ?";




             db.query(sql_statement2, [userid], (err2, result2) => {
            console.log(userid)
            console.log("Insert being called ")
            if (err2) {
                console.log("There is a error ", err2)
                return res.json({ message: 'Error saving driver profile: ' + err2 });
            }

            console.log("Driver profile retrieved:", result2);

            return res.json({user : (result2[0]) })

        });
        }
        else
        {
            return res.json({fail:"User data failed to be retrieved"})

        }

    }
    
    
  })



})


userrouter.post("/create_profile/:user_id", (req, res) => {
    console.log("create being called");
    const userId = Number(req.params.user_id);
    console.log("userId ", userId);

    const sqlCheck = "SELECT * FROM USER WHERE user_id = ?";

    db.query(sqlCheck, [userId], (err, result) => {
        console.log("Sql being called ");
        if (err) {
            return res.json({ message: 'Something unexpected occurred: ' + err });
        }

        console.log("Result:", result);

        // Check if user exists
        const exists = result.length > 0;

        console.log("Exists:", exists);

        if (!exists) {
            return res.json({ message: "User does not exist" });
        }

        // Now insert the driver profile
        const sqlInsert = `
            INSERT INTO DRIVER_PROFILE 
            (user_id, address, license_number, driver_type, experience_years, status) 
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        const values = [
    userId,
    req.body.address || '',
    req.body.license_number || '',
    req.body.driver_type || '',       
    Number(req.body.experience_years) || 0,
    req.body.status || 'Active'
];


        db.query(sqlInsert, values, (err2, result2) => {
            console.log(values)
            console.log("Insert being called ")
            if (err2) {
                console.log("There is a error ", err2)
                return res.json({ message: 'Error saving driver profile: ' + err2 });
            }

            console.log("Driver profile created:", result2);
            return res.json({ success: "Driver profile created" });
        });
    });
});












userrouter.get("/update_profile/:user_id",(req,res) =>{
    console.log("/update_profile/:user_id");
    const userid = Number(req.params.user_id);
    console.log("userid ", typeof(userid))


    const sql_statement1 = "SELECT * FROM DRIVER_PROFILE WHERE `user_id` = ?";

    let exists = false;

    db.query(sql_statement1,[userid], function (err, result) {
    if (err) 
    {

        return res.json({message: 'Something unexpected has occured '+err})
    }
    else
    {
      if(result)
      {
        exists = true;
      }
      else
      {
        exists = false;

      }
    }

    
    
  })


  if(exists)
  {
      
  }








})









export default userrouter;
