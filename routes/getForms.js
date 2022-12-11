const { Router } = require('express')
const router = Router();
const Customer = require("../models/Customers.schema");
router.get("/all", async (req, res) => {
    let data = await Customer.find({});
    res.status(200).json(data);
})
router.get("/delete", async (req, res) => {
    await Customer.deleteMany({});
    res.send("done")
})
module.exports = router;