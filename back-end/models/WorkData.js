// models/WorkData.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WorkDataSchema = new Schema({
    id: String,
    TimeTable:{
      workOn: Date,
      workOff: Date,
      longitude:Number,//경도
      latitude:Number, //위도
      finish_longitude:Number,
      finish_latitude:Number,
      workingTimePerWeek: Number
    }
});


module.exports = mongoose.model('WorkData', WorkDataSchema);

var date = new Date();
var WorkData = mongoose.model('WorkData', WorkDataSchema);
for(var i=1; i<=10; i++) {
    var newworkdata = new WorkData({id:'test'+i});
    newworkdata.save(function(error, data){
        if(error){
            console.log(error);
        }
    });
}
var newworkdata = new WorkData({id:'test1', TimeTable:{workOn: date, workOff: date, longitude:120, latitude:110, finish_latitude: 110, finish_longitude:120, workingTimePerWeek:40}});
newworkdata.save(function(error, data){
  if(error){
      console.log(error);
  }
});

