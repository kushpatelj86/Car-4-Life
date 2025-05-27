import express from 'express';

const app = express()
app.get('/',(reg,res)=>{
    res.send("Server is ready");
})

const port = process.env.PORT || 8000;

app.listen(port, () =>{
    console.log(`Server at http://localhost:${port}`);
})