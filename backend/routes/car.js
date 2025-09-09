import express from 'express';
import {db} from '../database/db.js'

const port = process.env.PORT || 8000;
const userrouter = express.Router()





userrouter.post("/add_car", (req, res) => {
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

    db.query(sql_statement, values, function (err, result) {
        if (err) return res.json({ message: 'Something unexpected occurred: ' + err });
        return res.json({ success: "User added successfully" });
    });
});
