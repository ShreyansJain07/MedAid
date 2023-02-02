const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const requestify = require('requestify');
const session = require('express-session');
const port = 5000;

const app = express();
app.use(session({
    secret: '1234567890QWERT',
    resave: true,
    saveUninitialized: false,
    snippet: '',
    highlight: ''
}))

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// MONGOOSE
mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://Rishab829:Kanchan%401@expresstry.wqhmyb0.mongodb.net/hack2?retryWrites=true&w=majority", { useNewUrlParser: true });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("We are connected bro");
});

//Schema
var donateSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    city: String,
    drugName: String,
    exp: String,
    qtySelected: String,
    qty: String,
    snippet: String,
    highlight: String
});

//Model
var Medicine = mongoose.model("Medicine", donateSchema);

let snippet = ''
let highlight = ''

app.get("/medicine", (req, res)=>{
    medName = req.query.query.replace(/ /g,"+");
    let url = `https://serpapi.com/search.json?q=${medName}+details+1mg&location=Maharashtra,+India&hl=hi&gl=in&google_domain=google.co.in&key=5d1b79b4ee809fa8365d09f2d36a866dda3b7e1e2f93ad1c59726eff1454f4f2`
    console.log(url);
    requestify.get(url)
    .then(function(response) {
        snippet = (response.getBody().organic_results[0].snippet);
        highlight = (response.getBody().organic_results[0].snippet_highlighted_words[0]);
    }
    );
})

app.post("/donate", (req, res) => {
    req.body.snippet = snippet;
    req.body.highlight = highlight;

  var myData = new Medicine(req.body);
  console.log(myData);
  myData
    .save()
    .then(() => {
      console.log("done");
      res.send("This data has been saved to the database");
    })
    .catch(() => {
      console.log("not done");
      res.status(400).send("Item was not saved to the database");
    });
});

app.listen(port, () => console.log("Connected to port " + port));
