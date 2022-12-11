const moment = require("moment")
const FromValidation = (req, res, next) => {
    const { fname, lname, email, dob, enroll_date, select_slot } = req.body;
    if (!fname || !lname || !email || !select_slot)
        res.status(400).json("data is invalid");
    let age_ceil = Math.ceil(moment().diff(dob, 'years', true));
    let age_floor = Math.floor(moment().diff(dob, 'years', true));
    if (age_floor < 18 && age_ceil > 65)
        res.status(400).json("age is invalid");
    let enroll_date_is_past = Math.floor(moment().diff(enroll_date, 'days', true));
    if (enroll_date_is_past > 0)
        res.status(400).json('You cant enroll in past classes')
    next();
}

module.exports = FromValidation;
