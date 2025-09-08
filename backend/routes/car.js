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
