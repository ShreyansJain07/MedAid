const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
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
// 'https://serpapi.com/search.json?q=dolo+650+details+1mg&location=Maharashtra,+India&hl=hi&gl=in&google_domain=google.co.in&key=5d1b79b4ee809fa8365d09f2d36a866dda3b7e1e2f93ad1c59726eff1454f4f2'
// let url = 'q=&location=Maharashtra,+India&hl=hi&gl=in&google_domain=google.co.in&key='
// const base = 'https://serpapi.com/search.json?'
// let query = 'dolo+650+details+1mg'
// const apikey = '5d1b79b4ee809fa8365d09f2d36a866dda3b7e1e2f93ad1c59726eff1454f4f2'

function getDetails() {
    console.log('in getdets');
    app.get(`https://serpapi.com/search.json?q=dolo+650+details+1mg&location=Maharashtra,+India&hl=hi&gl=in&google_domain=google.co.in&key=5d1b79b4ee809fa8365d09f2d36a866dda3b7e1e2f93ad1c59726eff1454f4f2`, (req, res)=>{
        console.log('yoo');
    })
}

app.get("/medicine", (req, res)=>{
    getDetails()
})



// app.post("/signup", (req, res) => {
//   console.log(req.body);
//   var myData = new Log(req.body);
//   myData
//     .save()
//     .then(() => {
//       console.log("done");
//       res.send("This data has been saved to the database");
//     })
//     .catch(() => {
//       console.log("not done");
//       res.status(400).send("Item was not saved to the database");
//     });
// });

// app.post("/login", (req, res) => {
//   var username = req.body.username;
//   var password = req.body.password;

//   Log.find({username: `${username}`}, {password: `${password}`}, (err, docs)=>{
//     if(docs.length == 0){
//         res.status(400).send('Invalid credentials')
//     }
//     else{
//         res.send("true");
//     }
//   });  
// })

app.listen(port, () => console.log("Connected to port " + port));
