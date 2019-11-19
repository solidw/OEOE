module.exports = function(app, [WorkData, Employee, Report])
{
//workOn&Off Information
app.get('/api/PersonalWorkingInformation', function(req, res){
  let company, department, name
  let weekworkOn = '', weekworkOff='', weeklongitude='', weeklatitude ='';
  Employee.findOne({id: req.query.id}, function(err, employee){
    if(err) return res.status(500).send({error: 'database failure'});
    if(!employee) return res.status(404).json({error: 'data not found'});
    company = employee.Company;
    department = employee.Department;
    name = employee.Name;
    WorkData.find({id: req.query.id}, function(err, workdatas){
      if(err) return res.status(500).send({error: 'database failure'});
      if(!workdatas) return res.status(404).json({error: 'data not found'});
      var length = workdatas.length;
      while(length > 0){
        weekworkOn += workdatas[length-1].TimeTable.workOn+","
        weekworkOff += (workdatas[length-1].TimeTable.workOff +",")
        weeklongitude += (workdatas[length-1].TimeTable.longitude +",")
        weeklatitude += (workdatas[length-1].TimeTable.latitude +",")
        length -=1;
      }
      var personData = {Company: company, Department: department, Name: name, Week_workOn:weekworkOn, Week_workOff:weekworkOff, Week_latitude: weeklatitude, Week_longitude: weeklongitude}
      res.json(personData);
    })
  })
})

app.get('/api/allWorkInfo', function(req, res){
  Employee.findOne({id: req.query.id}, function(err, employee){
    if(err) return res.status(500).send({error: 'database failure'});
    if(!employee) return res.status(404).json({error: 'data not found'});
    var company = employee.Company;
    Employee.find({Company: company}, async function(err, employee){
      if(err) return res.status(500).send({error: 'database failure'});
      if(!employee) return res.status(404).json({error: 'data not found'});
      var length = employee.length;
      var ids = new Array();
      var count = 0;
      for(var i = 0; i<length; i++){
        if(!ids.includes(employee[i].id)){
          ids[count] = employee[i].id;
          count++;
        }
      }
      const finalData = new Array();
       for(var i = 0; i<ids.length+1;i++){
        const allWorkingInfo = new Array();
          await WorkData.find({id: ids[i]}, async function(err, workdatas){
          if(err) return res.status(500).send({error: 'database failure'});
          if(!workdatas) return res.status(404).json({error: 'data not found'});
          allWorkingInfo[i] = workdatas.TimeTable;
          var getdepartment = await Employee.findOne({id: ids[i]}); 
          for(var j = 0; j<workdatas.length;j++){
            allWorkingInfo[j] = {id: workdatas[j].id, Department: getdepartment.Department, TimeTable: workdatas[j].TimeTable};
            finalData.push(allWorkingInfo[j]);
          }
        });
      }
      res.json(finalData);
    })
  });
})

//AccountInformation
app.get('/api/AccountInformation', function(req, res){
  let name, company, department, email, workingTimePerWeek;
  Employee.findOne({id: req.query.id}, function(err, employee){
    if(err) return res.status(500).send({error: 'database failure'});
    if(!employee) return res.status(404).json({error: 'data not found'});
    name = employee.Name;
    company = employee.Company;
    department = employee.Department;
    email = employee.email;

    WorkData.find({id: req.query.id}, function(err, workdatas){
      if(err) return res.status(500).send({error: 'database failure'});
      if(!workdatas) return res.status(404).json({error: 'data not found'});
      workingTimePerWeek = workdatas[workdatas.length-1].TimeTable.workingTimePerWeek;
      var personData = {Name: name, Company: company, Department: department, Email: email, WorkingTimePerWeek:workingTimePerWeek}
      res.json(personData);
    })
  })
})

//Get Single Reports
app.get('/api/getReports',function(req, res){
  let name, company, department;
  let title = '', contents= '';
  Employee.findOne({id: req.query.id}, function(err, employee){
    if(err) return res.status(500).send({error: 'database failure'});
    if(!employee) return res.status(404).json({error: 'data not found'});
    name = employee.Name;
    company = employee.Company;
    department = employee.Department;
    Report.find({id: req.query.id}, function(err, reports){
      if(err) return res.status(500).send({error: 'database failure'});
      if(!reports) return res.status(404).json({error: 'data not found'});
      var length = reports.length;
      var individualReports = new Array();
      while(length > 0){
        individualReports.push(reports[length-1]);
        length -=1;
      }
      var personData = {Name: name, Company: company, Department: department, Reports: individualReports};
      res.json(personData);
    })
  })
})

//get All Reports
app.get('/api/getTotalReports',function(req, res){
  Employee.findOne({id: req.query.id}, function(err, employee){
    if(err) return res.status(500).send({error: 'database failure'});
    if(!employee) return res.status(404).json({error: 'data not found'});
    var company = employee.Company;
    Employee.find({Company: company}, async function(err, employee){
      if(err) return res.status(500).send({error: 'database failure'});
      if(!employee) return res.status(404).json({error: 'data not found'});
      var length = employee.length;
      var ids = new Array();
      var count = 0;
      for(var i = 0; i<length; i++){
        if(!ids.includes(employee[i].id)){
          ids[count] = employee[i].id;
          count++;
        }
      }
      const totalReports = new Array();
       for(var i = 0; i<ids.length+1;i++){
        const individualReports = new Array();
          await Report.find({id: ids[i]}, async function(err, reports){
          if(err) return res.status(500).send({error: 'database failure'});
          if(!reports) return res.status(404).json({error: 'data not found'});
          individualReports[i] = reports.Reports; 
          var getdepartment = await Employee.findOne({id: ids[i]});
          for(var j = 0; j<reports.length;j++){
            individualReports[j] = {id: reports[j].id, Department: getdepartment.Department, Reports: reports[j].Reports};
            totalReports.push(individualReports[j]);
          }
        });
      }
      res.json(totalReports);
    })
  });
})

//Submit Reports
app.post('/api/storeReport', function(req, res){
  var report = new Report();
  report.id = req.query.id;
  report.Reports.Title= req.query.title;
  report.Reports.Contents = req.query.contents;
  report.Reports.submitTime = new Date();

  report.save(function(err){
    if(err){
      console.error(err);
      res.json({result: 0});
      return;
    }
    var reportData = {statusCode: 200};
    res.json(reportData);
  })
})

//Right After LogIN
app.get('/api/StandardInformation', function(req, res){
  WorkData.find({id: req.query.id}, function(err, workdatas){
    var date = new Date();
    var length = workdatas.length;
    var recentWorkTime = workdatas[length-1].TimeTable.workOn.toLocaleTimeString();
    // console.log(available.toLocaleDateString());
    var Available = true;
    if(recentWorkTime != null && recentWorkTime == date.toLocaleDateString()){
      Available = true;
    }
    else{
      Available = false;
    }
    var personData = {available: Available, workingTimePerWeek : workdatas[length-1].TimeTable.workingTimePerWeek, recentWorkOnTime: recentWorkTime};
    res.json(personData);
  })
})

//Click WorkOn
app.post('/api/WorkOn', function(req, res){
  var workdata = new WorkData();
  workdata.id = req.query.id;
  workdata.TimeTable.workOn = new Date();
  workdata.TimeTable.longitude = req.query.longitude;
  workdata.TimeTable.latitude = req.query.latitude;

  WorkData.find({id: req.query.id}, function(err, workdatas){
    if(err) return res.status(500).send({error: 'database failure'});
    if(!workdatas) return res.status(404).json({error: 'data not found'});
    var identifyWeek = workdata.TimeTable.workOn.getDay(); 
    if(identifyWeek == 1){//monday
      workdata.TimeTable.workingTimePerWeek = 0;
    }else{//else
      var length = workdata.length-1;
      var weekWorkingHours = 0;
      for(var i = identifyWeek; i >1; i--){
        if(workdatas[length].TimeTable.workOn.getDate()<=workdata.TimeTable.workOn.getDate()-7){
          break;
        }
        weekWorkingHours += workdatas[length].TimeTable.workingTimePerWeek;
        length--;
      }
      workdata.TimeTable.workingTimePerWeek = workdatas[workdatas.length-1].TimeTable.workingTimePerWeek;
    }
    workdata.save(function(err){
      if(err){
        console.error(err);
        res.json({result: 0});
        return;
      }
      var personData = {statusCode: 200, workOnTime : workdata.TimeTable.workOn.toLocaleTimeString};
      res.json(personData);
    })
  })
})

//Click WorkOff
app.post('/api/WorkOff', function(req, res){
  WorkData.find({id: req.query.id}, function(err, workdatas){
    var worker = workdatas[workdatas.length-1];
    worker.TimeTable.workOff = new Date(+10000);
    worker.TimeTable.longitude = req.query.longitude;
    worker.TimeTable.finish_latitude = req.query.latitude;
    var currentWorkingHours = (worker.TimeTable.workOff.getTime()-worker.TimeTable.workOn.getTime());
   // console.log(parseInt(currentWorkingHours/(1000 * 60 * 60)));
    worker.TimeTable.workingTimePerWeek += currentWorkingHours;
    worker.save(function(err){
      if(err){
        console.error(err);
        res.json({result: 0});
        return;
      }
    var personData = {statusCode: 200, workOffTime : worker.TimeTable.workOff.toLocaleTimeString};
    res.json(personData);
    })
  })
})

//TEST
app.get('/api/test', function(req, res){
  Employee.findOne({id: req.query.id}, function(err, employee){
    if(err) return res.status(500).json({error: err});
    if(!employee) return res.status(404).json({error: 'employee not found'});
    res.json(employee);
  })
})

}
