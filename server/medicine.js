const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const requestify = require('requestify');
const port = 5000;

const app = express();
app.use(express.json());
app.use(cors());

// EXPRESS
// app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: true }));

// MONGOOSE
mongoose.set("strictQuery", true);
mongoose.connect("mongodb://localhost:27017/prac2", { useNewUrlParser: true });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("We are connected bro");
});

//Schema
var authSchema = new mongoose.Schema({
  username: String,
  password: String,
});

//Model
var Log = mongoose.model("Log", authSchema);

app.get("/medicine", (req, res)=>{
    console.log('yoo');
    requestify.get('https://serpapi.com/search.json?q=dolo+650+details+1mg&location=Maharashtra,+India&hl=hi&gl=in&google_domain=google.co.in&key=5d1b79b4ee809fa8365d09f2d36a866dda3b7e1e2f93ad1c59726eff1454f4f2')
    .then(function(response) {
        console.log(response.getBody().organic_results[0]);
    }
    );
})

app.listen(port, () => console.log("Connected to port " + port));
