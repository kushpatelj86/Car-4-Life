import express from 'express';
import {db} from '../database/db.js'

const port = process.env.PORT || 8000;
const carrouter = express.Router()





carrouter.post("/add_car", (req, res) => {

    console.log("Add Car being called ")

    const sql_statement = `
        INSERT INTO CAR 
        (owner_user_id, make, model, year, vin, mileage, fuel_type) 
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
        req.body.owner_user_id,
        req.body.make,
        req.body.model,
        req.body.year,
        req.body.vin,
        req.body.mileage,
        req.body.fuel_type 
    ];

    console.log("Values ",values);

    db.query(sql_statement, values, function (err, result) {
        if (err) {
            console.log("Error " + err)
            return res.json({ message: 'Something unexpected occurred: ' + err })
        };
        return res.json({ success: "User added successfully" });
    });
});
export default carrouter;
