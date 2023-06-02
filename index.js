const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("./public"));


mongoose
  .connect('mongodb+srv://Mongouser:Mongodb@2023@cluster0.2tb76ef.mongodb.net/?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DB connected successfully"))
  .catch((error) => console.log("DB connection failed",error));

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.send("Mongo is loading");
});

app.listen(process.env.Server_port, () => {
  console.log("Server is running on James bond port port:7000");
});
