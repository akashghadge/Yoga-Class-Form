const { Router } = require('express')

const router = Router();
const Customer = require("../models/Customers.schema");
router.post("/submit", async (req, res) => {
    const { fname, email, lname, dob, select_slot, enroll_date } = req.body;
    try {
        let newCustomer = new Customer({
            fname: fname, lname: lname, email: email, dob: dob, select_slot: select_slot, enroll_date: enroll_date, createdAt: Date.now()
        });
        let data = await newCustomer.save();
        res.status(201).json(data)
    }
    catch (err) {
        res.status(500).json(err);
    }


})


module.exports = router;