import express from 'express';
import userrouter from './routes/user.js'
import carrouter from './routes/car.js'

import cors from 'cors'

const port = process.env.PORT || 8000;


const app = express()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/',(reg,res)=>{
    res.send("Server is ready");
})





app.use("/user",userrouter)

app.use("/car",carrouter)



app.listen(port, () =>{
    console.log(`Server at http://localhost:${port}`);
})