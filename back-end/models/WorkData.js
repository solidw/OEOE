// models/WorkData.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WorkDataSchema = new Schema({
    id: String,
    TimeTable:{
      workOn: Date,
      workOff: Date,
      outworkTimeTable: [{
        
        longitude:Number,
        latitude:Number,
      }],
      longitude:Number,//경도
      latitude:Number, //위도
      finish_longitude:Number,
      finish_latitude:Number,
      workingTimePerWeek: Number
    }
});

module.exports = mongoose.model('WorkData', WorkDataSchema);

function makeRandom(min, max){
var RandVal = Math.floor(Math.random()*(max-min+1)) + min;
    return RandVal;
}

var WorkData = mongoose.model('WorkData', WorkDataSchema);
for(var i =1; i<=10; i++){
    for(var j = 1; j<=17; j++){
        var onhour = makeRandom(8, 10);
        var offhour = makeRandom(17,21);
        var minute = makeRandom(00, 60);
        var workinghours = makeRandom(0, 50);
        var ondate = new Date(2019, 10, j, onhour, minute).toLocaleString('ko-KR', {timeZone: 'Asia/Seoul'});
        var offdate = new Date(2019, 10, j, offhour, minute).toLocaleString('ko-KR', {timeZone: 'Asia/Seoul'});
        var newworkdata = new WorkData({id:'test'+i, TimeTable: {workOn: ondate, workOff:offdate, longitude:120, latitude:130, finish_latitude:130, finish_latitude: 120, workingTimePerWeek: workinghours}});
        newworkdata.save(function(error, data){
            if(error){
                console.log(error);
            }
        });
		console.log(ondate);
    }
}
for(var i =1; i<=10; i++){
  for(var j = 18; j<=19; j++){
    var onhour = makeRandom(9, 12);
    var offhour = makeRandom(16,18);
    var minute = makeRandom(00, 60);
    var workinghours = makeRandom(0, 8);
	var ondate = new Date(2019, 10, j, onhour, minute).toLocaleString('ko-KR', {timeZone: 'Asia/Seoul'});
	var offdate = new Date(2019, 10, j, offhour, minute).toLocaleString('ko-KR', {timeZone: 'Asia/Seoul'});
    var newworkdata = new WorkData({id:'test'+i, TimeTable: {workOn: ondate, workOff:offdate, longitude:120, latitude:130, finish_latitude:130, finish_latitude: 120, workingTimePerWeek: workinghours}});
    newworkdata.save(function(error, data){
        if(error){
            console.log(error);
        }
    });
  }
}
