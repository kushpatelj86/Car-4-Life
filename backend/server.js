import express from 'express';
import db from './database/db.js'
import userrouter from './routes/user.js'
const port = process.env.PORT || 8000;


const app = express()
app.get('/',(reg,res)=>{
    res.send("Server is ready");
})

app.use("/user",userrouter)





app.listen(port, () =>{
    console.log(`Server at http://localhost:${port}`);
})