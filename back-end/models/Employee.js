var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
    id:String,
    password:String,
    Name: String,
    Company: String,
    Department:String,
    email:String
});

var Employee = mongoose.model('Employee', EmployeeSchema);
for(var i=1; i<=10; i++) {
    if(i>=1 && i<=3){
        var newEmployee = new Employee({id:'test'+i, password:'1q2w3e4r'+i, Name:'TEST'+i, Company:'CSE', Department:'영업', email:'test1@gmail.com'+i});
    }
    else if(i>=4 && i<=7){
        var newEmployee = new Employee({id:'test'+i, password:'1q2w3e4r'+i, Name:'TEST'+i, Company:'CSE', Department:'개발', email:'test1@gmail.com'+i});
    }
    else{
        var newEmployee = new Employee({id:'test'+i, password:'1q2w3e4r'+i, Name:'TEST'+i, Company:'CSE', Department:'인사', email:'test1@gmail.com'+i});
    }
    newEmployee.save(function(error, data){
        if(error){
            console.log(error);
        }
    });
}
module.exports = mongoose.model('Employee', EmployeeSchema);