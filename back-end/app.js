// app.js

// [LOAD PACKAGES]
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');

// [CONFIGURE APP TO USE bodyParser]
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
mongoose.connect('mongodb://localhost:27017/OEOE')
console.log(mongoose.GET)


// DEFINE MODEL
var WorkData = require('./models/WorkData.js')
var Employee = require('./models/Employee.js')
var Report = require('./models/Report.js')
for(var i = 1; i<=10; i++){
    WorkData.deleteMany({id: 'test'+i}, function (err, _) {
        if (err) {
            return console.log(err);
        }
    });
    Employee.deleteMany({id: 'test'+i}, function (err, _) {
        if (err) {
            return console.log(err);
        }
    });
    Report.deleteMany({id: 'test'+i}, function (err, _) {
        if (err) {
            return console.log(err);
        }
    });
}
// [CONFIGURE ROUTER]
var router = require('./routes')(app, [WorkData, Employee, Report])

// [RUN SERVER]
var server = app.listen(port, function(){
 console.log("Express server has started on port " + port)
});

