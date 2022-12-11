const router = require('express').Router();
const Customer = require("../models/Customers.schema");
const CompletePayment = (props) => {
    return new Promise((resolve, reject) => {
        resolve(props);
        reject("failed");
    })
}
router.post('/pay', async (req, res) => {
    let requiredCustomer = await Customer.findById(req.body._id);
    if (!requiredCustomer) { res.status(404).json("user not found"); return; };
    if (requiredCustomer.fees_paid) { res.status(400).json('already payment is made'); return; }

    CompletePayment(req.body).then(async (result) => {
        try {
            requiredCustomer.fees_paid = true;
            await requiredCustomer.save();
            res.status(200).json("Payment made Successfully");
        }
        catch (err) {
            res.status(500).json(err);
        }
    }).catch((err) => {
        res.status(500).json("Payment is not successful !!!")
    });
})
module.exports = router;