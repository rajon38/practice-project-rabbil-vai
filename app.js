//basic lib import
const express = require("express");
const router = require("./src/routes/api");
const app = new express();
const bodyParser = require("body-parser");

//security middleware lib import
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");

//database lib import
const mongoose = require("mongoose");

//security middleware implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

//body parser implement
app.use(bodyParser.json());

//request rate limit
const limiter = rateLimit({windowMs:15*60*1000, max:3000});
app.use(limiter);

//mongo Db connection
let URI="mongodb://localhost:27017/ToDoList";
let OPTION= {user:'', pass:'',autoIndex: true};
mongoose.connect(URI,OPTION,(error)=>{
    console.log("Connection Success");
    console.log(error);
});

//routing implement
app.use("/api/v1",router);

// undefined route implement
app.use("*",(req,res) => {
    res.status(404).json({status:"failed",data:"Not Found"});
});

module.exports=app;