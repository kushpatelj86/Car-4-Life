import express from 'express';
import userrouter from './routes/user.js'
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





app.listen(port, () =>{
    console.log(`Server at http://localhost:${port}`);
})