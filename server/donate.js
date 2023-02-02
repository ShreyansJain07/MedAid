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
    let url = `https://serpapi.com/search.json?q=${medName}+details+1mg&location=Maharashtra,+India&hl=hi&gl=in&google_domain=google.co.in&key=5d1b79b4ee809fa8365d09f2d36a866dda3b7e1e2f93ad1c59726eff1454f4f2`;
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
    let date = req.body.exp
    date = date.replace(/-/g, "/")
    date = date.split("/").reverse().join("/")
    req.body.exp = date
    
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

app.get("/getmedicine", (req, res)=>{
    let view;
        async function viewMedicines(){
            view = await db.collection('medicines').find().toArray();
            console.log(view);
            res.json(view);
        }
    viewMedicines();
})

function setDate(req) {
    const monthNames = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
        "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
    ];

    var d = new Date();
    var num = d.getDate();
    var month = monthNames[d.getMonth()];
    req.body.date = month.substring(0, 3) + " " + num;
    req.body.postdate = month + " " + num;
    
    var today = new Date();
    var tomorrow = new Date();
    tomorrow.setDate(today.getDate()+60);
    num = tomorrow.getDate();
    month = monthNames[tomorrow.getMonth()]
    var diffDays = parseInt((tomorrow - today) / (1000 * 60 * 60 * 24), 10); 

    // req.body.expirydate = month + " " + num + " " + `(IN ${diffDays} DAYS)`;
}

const diff = (exp) => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const formattedToday = dd + "/" + mm + "/" + yyyy;
    const date1 = new Date(formattedToday);
    const date2 = new Date(exp);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(
      diffTime / (1000 * 60 * 60 * 24)
    );
    console.log(diffDays + "days");
    return diffDays;
  }

app.listen(port, () => console.log("Connected to port " + port));
