"use strict";
// initial set up of server
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// must needed packages
const cros = require("cors");
require("dotenv").config();


// middleware
app.use(express.json());
app.use(cros());

// getting db connection
require("./DB/conn");


// api routers
const Form = require("./routes/Form.route");
const getForms = require("./routes/getForms");
const Payment = require("./routes/Payment.routes");
const FromValidation = require("./middlewares/FormValidation");
// routes setting
app.use('/api/form', FromValidation, Form);
app.use('/api/forms/get', getForms)
app.use('/api/payment', Payment);

// for production use
// app.use(express.static("client/dist"));
// const path = require("path");
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client", "dist", "index.html"))
// })

app.listen(port, () => {
    console.log("Server is listening on port ", port);
})