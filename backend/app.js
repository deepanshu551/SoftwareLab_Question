var express = require('express');
var db = require('./dbconnection');
var app = express();
var cors = require('cors');


var bodyparser = require('body-parser');
app.use(bodyparser.json());
var EmpRouter = require('./router');
app.use(cors({ origin: "http://localhost:4200" }));
app.use("/home", EmpRouter);
app.listen(3000, () => {
    console.log("server listing at port 3000");
})