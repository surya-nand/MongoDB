const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require('dotenv')

const app = express();
dotenv.config()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("./public"));

SERVER = 'mongodb+srv://user:mongo123@cluster0.3svkt4m.mongodb.net/?retryWrites=true&w=majority'

const Employee = mongoose.model('employee',{
    name: String,
    age: Number
})



app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.send("Mongo is loading");
});

app.listen(process.env.Server_port, () => {
    mongoose
  .connect(SERVER, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DB connected successfully"),
   console.log("Server is running on James bond port port:7000"))
  .catch((error) => console.log("DB connection failed",error));
});
