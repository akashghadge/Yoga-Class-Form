const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment")
const { isEmail } = require('validator');

const CustomerSchema = new Schema
    ({
        email: {
            type: String,
            required: [true, 'please enter an email'],
            unique: true,
            lowercase: true,
            validate: [isEmail, 'please enter a valid email']
        },
        fname: {
            type: String,
            minLength: [3, 'minimum password length is 3 charecters'],
            required: [true, 'please enter first name']
        },
        lname: {
            type: String,
            minLength: [3, 'minimum password length is 3 charecters'],
            required: [true, 'please enter first name']
        },
        dob: { type: Date, default: Date.now },
        enroll_date: { type: Date, default: Date.now },
        fees_paid: { type: Boolean, default: false },
        select_slot: { type: String, required: [true, 'please enter slot'] },
        createdAt: { type: Date, default: Date.now }
    },
        {
            virtuals: {
                age: {
                    get() {
                        return Math.floor(moment().diff(this.dob, 'years', true));
                    }
                }
            }
        });

const Customer = mongoose.model("Customer", CustomerSchema);
module.exports = Customer;
