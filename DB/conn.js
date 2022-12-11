// database connections
const mongoose = require("mongoose");
const uri = process.env.MONGO_URI;
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/yoga-class", {
    useNewUrlParser: true, useUnifiedTopology: true
}).then((data) => {
    console.log("DB is connected..");
}).catch((err) => {
    console.log(err);
});
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Database connected sucessfully");
})


