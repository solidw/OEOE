// app.js

// [LOAD PACKAGES]
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var cors		= require('cors');
// [CONFIGURE APP TO USE bodyParser]
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(function(err, req, res, next) {
    res.status(err.status || 500).json(response.error(err.status || 500));
});
// [CONFIGURE SERVER PORT]
var port = process.env.PORT || 8080;

// [ CONFIGURE mongoose ]

// CONNECT TO MONGODB SERVER
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});
mongoose.connect('mongodb://wantae.tk:27017/OEOE')
console.log(mongoose.GET)

// DEFINE MODEL
var WorkData = require('./models/WorkData.js')
var Employee = require('./models/Employee.js')
var Report = require('./models/Report.js')
// [CONFIGURE ROUTER]
var router = require('./routes')(app, [WorkData, Employee, Report])

// [RUN SERVER]
var server = app.listen(port, function(){
 console.log("Express server has started on port " + port)
});
// error control
