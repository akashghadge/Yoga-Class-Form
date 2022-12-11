const { Router } = require('express')
const moment = require('moment')
const router = Router();
const Customer = require("../models/Customers.schema");

router.post("/submit", async (req, res) => {
    const { fname, email, lname, dob, select_slot, enroll_date } = req.body;
    try {
        let alreadyUserExists = await Customer.find({ email: email, month: moment(enroll_date).month() })
        // find is there any prev user exists
        // if exists find is user come for same month then redirect  it to preview page without adding the data
        if (alreadyUserExists.length != 0) {
            // if fees is also paid
            if (alreadyUserExists[0].fees_paid) {
                res.status(400).json("Registration Already Exists and Fees is Paid !!!")
                return;
            }
            res.status(303).json(alreadyUserExists[0]);
            return;
        }
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