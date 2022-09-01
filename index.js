const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const RouterForm = require("./routes/user.js")
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser:true
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.post("/handover",RouterForm);
app.post("/initial-shift-inspection",RouterForm);
app.post("/production-parameters",RouterForm);
app.post("/material-used",RouterForm);
app.post("/production-results",RouterForm);
app.post("/imd-reject",RouterForm);
app.post("/total-resin-usage",RouterForm);
app.post("/daily-report",RouterForm);
app.get("/halo", function(req, res){
    res.send("halooo");
})

app.listen(process.env.PORT, function(){
    console.log("Server has been running on port " + process.env.PORT);
})

