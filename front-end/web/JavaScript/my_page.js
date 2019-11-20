<<<<<<< HEAD
var today = new Date();
var year = today.getFullYear(); // 년도
var month = today.getMonth() + 1; // 월
var date = today.getDate(); // 날짜

let allWorkInfo;
function arrayfilter() {
    fetch('http://wantae.tk:8080/api/allWorkInfo?id=test1')
        .then(
            res => res.json()
        )
        .then(function (data) {
            allWorkInfo = data;
        });
}
function filterarray(){
  test = new Array;
    for (let i = 0; i < allWorkInfo.length; i++) {
        test.unshift(allWorkInfo[i]["id"]);
    }
    var single2_ = test.filter((item, idx, array) => {
        return array.indexOf(item) === idx;
    });
    return single2_;
}
let getTotalRepo;

function getTotalReports() {
    var repo_name = document.getElementsByClassName("repo_name");
    var depart_lepo = document.getElementsByClassName("depart_lepo");
    var title_lepo = document.getElementsByClassName("title_lepo");
    fetch('http://wantae.tk:8080/api/getTotalReports?id=test1')
        .then(
            res => res.json()
        )
        .then(function (data) {
            getTotalRepo = data;
        });

    test1 = new Array;
    for (let i = 0; i < getTotalRepo.length; i++) {
        test1.unshift(getTotalRepo[i]["id"]);
    }
    // console.log(test1);
    let single3 = test1.filter((item, idx, array) => {
        return array.indexOf(item) === idx;
    });
    // console.log(single3);
    for (var i = 0; i < single3.length; i++) {
        repo_name[i].innerText = single3[i];
        for (var j = 0; j < getTotalRepo.length; j++) {
            if (repo_name[i].innerText == getTotalRepo[j]["id"]) {
                depart_lepo[i].innerText = getTotalRepo[j]["Reports"]["Title"];
                title_lepo[i].innerText = getTotalRepo[j]["Department"];
                title_lepo[i]
                    .parentNode
                    .setAttribute('class', 'list col-md-3 ' + getTotalRepo[j]["Department"]);
                break;
            }
        }

    }
}

// function loadDoc() {
//     fetch('http://wantae.tk:49160/api/test?id=test1')
//         .then(res => res.json())
//         .then(function (data) {
//             c = data;
//             getTotalReponsole.log(data)
//         });

//     fetch('http://wantae.tk:49160/api/test?id=test1')
//         .then(res => res.json())
//         .then(data => getTotalReponsole.log(data))

// }

function map() {
    navigator
        .geolocation
        .getCurrentPosition(function (pos) {
            var map_;
            var latitude = pos.getTotalRepoords.latitude;
            var longitude = pos.getTotalRepoords.longitude;
            var geogetTotalRepoder = new kakao
                .maps
                .services
                .GeogetTotalRepoder();
            var getTotalRepoord = new kakao
                .maps
                .LatLng(latitude, longitude);
            var callback = function (result, status) {
                if (status === kakao.maps.services.Status.OK) {
                    map_ = result[0].address.address_name;
                    getTotalReponsole.log(map_);
                }
            };
            geogetTotalRepoder.getTotalRepoord2Address(
                getTotalRepoord.getLng(),
                getTotalRepoord.getLat(),
                callback
            );
        });

}

function modal(this_id) {
    var modal = document.getElementById("upload_");
    modal.style.display = "block";
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
let myinfo;
function my_info(){
    fetch('http://wantae.tk:8080/api/AccountInformation?id='+sessionStorage.getItem('userName'))
    .then(
        res => res.json()
    )
    .then(function (data) {
        myinfo = data;
    });
    document.getElementById('my_name').innerText = myinfo['Name'];
    document.getElementById('my_week').innerText = myinfo['WorkingTimePerWeek'];
    document.getElementById('my_com').innerText = myinfo['Company'];
    document.getElementById('my_dep').innerText = myinfo['Department'];
    document.getElementById('my_email').innerText = myinfo['Email'];

}
function login() {


    if (sessionStorage.getItem('userName') != null) {
        document
            .getElementById("login_")
            .innerHTML = sessionStorage.getItem('userName') + "환영합니다";
        document
            .getElementById('login_')
            .style
            .fontSize = "23px";
        document
            .getElementById('sing')
            .style
            .display = "none";
            //         
    }

}

function check() {
    let today = new Date();

    let hours = today.getHours(); // 시
    let minutes = today.getMinutes(); // 분
    let segetTotalReponds = today.getSegetTotalReponds(); // 초
    let millisegetTotalReponds = today.getMillisegetTotalReponds(); // 밀리초
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1; // 월
    let date = today.getDate(); // 날짜
    let day = today.getDay(); // 요일
    getTotalReponsole.log(
        hours + ':' + minutes + ':' + segetTotalReponds + ':' +
        millisegetTotalReponds
    );
    getTotalReponsole.log(year + '/' + month + '/' + date)

}

function search() {
    var sea = document
        .getElementById("search")
        .value
    var name = document.getElementsByClassName("work_name");
    for (var i = 0; i < name.length; i++) {
        if (sea == document.getElementsByClassName("work_name")[i].innerText) {
            document.getElementsByClassName("work_name")[i].parentNode.style.backgroundColor = "#b8b4b4";
        }
    }
}

function not_searh() {
    var sea = document
        .getElementById("search")
        .value
    var name = document.getElementsByClassName("work_name");
    for (var i = 0; i < name.length; i++) {
            document.getElementsByClassName("work_name")[i].parentNode.setAttribute("style"," ")
        
    }
}

function modal_2(this_id) {
    var modal = document.getElementById("upload_2");
    modal.style.display = "block";
    var repo_id = document.getElementById(this_id);
    repo_id = repo_id.firstElementChild.innerText;
    var parent = document
        .getElementsByClassName("report_list_2")[0]
        .parentNode;
    parent.removeChild(document.getElementsByClassName("report_list_2")[0]);
    var temp = document.createElement("div");
    temp.setAttribute("class", "report_list_2");
    parent.appendChild(temp);
    for (var i = 0; i < getTotalRepo.length; i++) {
        if (repo_id == getTotalRepo[i]["id"]) {
            var p1 = document.createElement("p");
            var p2 = document.createElement("p");
            p2.setAttribute('style',"border-bottom: 1px solid; margin-bottom: 3;")
            var p3 = document.createElement("p");
            p1.innerText = getTotalRepo[i]["Reports"]["Title"];
            p2.innerText = getTotalRepo[i]["Reports"]["Contents"];
            p3.innerText = getTotalRepo[i]["Reports"]["submitTime"];
            document
                .getElementsByClassName("report_list_2")[0]
                .append(p1);
            document
                .getElementsByClassName("report_list_2")[0]
                .append(p3);
            document
                .getElementsByClassName("report_list_2")[0]
                .append(p2);
        }
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

Date.prototype.getWeek = function (start) {
    //Calcing the starting point
    start = start || 0;
    var today = new Date(this.setHours(0, 0, 0, 0));
    // console.log("    :" + today);
    var day = today.getDay() - start;
    var date = today.getDate() - day;
    // Grabbing Start/End Dates
    var StartDate = new Date(today.setDate(date));
    var EndDate = new Date(today.setDate(date + 6));
    return [StartDate, EndDate];
}

function tabledata() {
    var temptime = gettime();
    tableCreate_2(temptime);
    fildtable();
}

function gettime() {
    var data_ = document
        .getElementById("work_date")
        .value;
    // console.log(data_)
    data_ = data_.split('-')
    var start
    start = start || 0;
    var today = new Date(data_[0], data_[1] - 1, data_[2], 0, 0, 0);
    // console.log("    :" + today);
    var day = today.getDay() - start;
    var date = today.getDate() - day;
    // Grabbing Start/End Dates
    var StartDate = new Date(today.setDate(date));
    StartDate = StartDate.toLocaleDateString();
    console.log(StartDate);
    return StartDate;
}

// test getTotalRepode
var Dates = new Date().getWeek();
var StartDate = Dates[0].toLocaleDateString();
var EndDate = Dates[1].toLocaleDateString();

function tableCreate() {
    //body reference
    var thead_ = document.getElementById("work_table");
    if (document.getElementById("tblBody") != null) {
        thead_.removeChild(document.getElementById("tblBody"));
    }
    var tblBody = document.createElement("tbody");
    tblBody.setAttribute("id", "tblBody");
    var t = StartDate.split('.');
    var name = filterarray();
    for (var j = 0; j < name.length; j++) {
        var row = document.createElement("tr")
        var temp = Number(t[2])
        var tabledate = t[0] + "-" + t[1].trim() + "-" + Number(t[2])
        for (var i = 0; i < 9; i++) {

            var cell = document.createElement("td");
            if (i == 0) {
                cell.setAttribute('class', 'work_td work_name ');
                cell.setAttribute('id', name[j]);
                cell.innerText = name[j];
            } else if (i != 8) {
                temp = Number(t[2]) + Number(i)
                tabledate = t[0] + "-" + t[1].trim() + "-" + temp
                cell.setAttribute('class', 'work_td ' + tabledate)
            } else {
                cell.setAttribute('class', 'work_td lastwork')
            }

            row.appendChild(cell);
        }

        //row added to end of table body
        tblBody.appendChild(row);
    }
    // append the <tbody> inside the <table>
    thead_.appendChild(tblBody);
}

function tableCreate_2(S_data) {
    //body reference
    var thead_ = document.getElementById("work_table");
    if (document.getElementById("tblBody") != null) {
        thead_.removeChild(document.getElementById("tblBody"));
    }
    var tblBody = document.createElement("tbody");
    tblBody.setAttribute("id", "tblBody");
    var t = S_data.split('.')
    // console.log(t);
    var name = filterarray();
    // console.log(" name  :"+name);
    for (var j = 0; j < name.length; j++) {
        var row = document.createElement("tr")
        var temp = Number(t[2])
        var tabledate = t[0] + "-" + t[1].trim() + "-" + Number(t[2])
        for (var i = 0; i < 9; i++) {
            var cell = document.createElement("td");
            if (i == 0) {
                cell.setAttribute('class', 'work_td work_name ');
                cell.setAttribute('id', name[j]);
                cell.innerText = name[j];
            } else if (i != 8) {
                temp = Number(t[2]) + Number(i)
                tabledate = t[0] + "-" + t[1].trim() + "-" + temp
                cell.setAttribute('class', 'work_td ' + tabledate)
            } else {
                cell.setAttribute('class', 'work_td lastwork')
            }
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }
    thead_.appendChild(tblBody);
}
var map_;
function fildtable() {
  var name = filterarray();
  for(var i = 0 ; i <name.length ; i++){
    for(var j = 0 ; j < allWorkInfo.length ; j++){
      if(name[i] == allWorkInfo[j]["id"] ){
        document.getElementById(name[i]).parentNode.setAttribute('class',allWorkInfo[j]["Department"]+'table')
        break;
      }
    }
  }
    for (let i = 0; i < allWorkInfo.length; i++) {
        var work_name = document.getElementById(allWorkInfo[i]["id"]);
        if (allWorkInfo[i]["TimeTable"]["workOn"] == undefined) 
            continue;
        var work = allWorkInfo[i]["TimeTable"]["workOn"].split('T')
        var tDate = new Date(allWorkInfo[i]["TimeTable"]["workOn"])
        var tDate2 = new Date(allWorkInfo[i]["TimeTable"]["workOff"])
        tDate.setHours(tDate.getHours()+1)
        tDate.setMinutes(tDate.getMinutes()-60)
        tDate2.setHours(tDate2.getHours()+1)
        tDate2.setMinutes(tDate.getMinutes()-60)
        // console.log(work+"   "+tDate)

        var temp_ = Number(tDate.getMonth())+1
        // console.log(tDate.getHours()+':'+tDate.getMinutes()+':'+tDate.getMinutes());
        var work_on = work[0];
        work_on = tDate.getFullYear()+'-'+temp_+'-'+tDate.getDate();
        // console.log("work on : " +work_on)
        var work_start_time = work[1].split('.');
        work_start_time = work_start_time[0];
        console.log(work_start_time+"<")
        // console.log(work_start_time+"<<")
        work_start_time = tDate.getHours()+':'+tDate.getMinutes()+':'+tDate.getMinutes();
        console.log(work_start_time+">")
        var td_date = work_name.nextElementSibling.className.split(" ");
        for (var j = 0; j < 7; j++) {
            if (td_date[1] == work_on) {
                var div_ = document.createElement("div");
                var p1 = document.createElement("p");
                p1.innerText = "출근 : " + work_start_time
                // work_name.nextElementSibling.innerText = work_start_time;
                if (allWorkInfo[i]["TimeTable"]["workOff"] != undefined) {
                    var work_off = allWorkInfo[i]["TimeTable"]["workOff"].split('T')
                    var work_end_time = work_off[1].split('.');
                    work_end_time = tDate2.getHours()+':'+tDate2.getMinutes()+':'+tDate2.getMinutes();
                    var p2 = document.createElement("p");
                    p2.innerText = "퇴근 : " + work_end_time;
                    div_.appendChild(p1);
                    div_.appendChild(p2);   
                    map22();
                    div_.setAttribute("class","w_o_d "+allWorkInfo[i]["id"]+"_");
                    div_.setAttribute("title",map_);
                } else {
                    div_.appendChild(p1);
                }
                work_name
                    .nextElementSibling
                    .appendChild(div_);
                // if( j == 6){
                //     var p2 = document.createElement("p");
                //     p2.innerText = allWorkInfo[i]["TimeTable"]["workingTimePerWeek"]
                //     work_name.nextElementSibling.nextElementSibling.appendChild(p2);
                // }
            }
            work_name = work_name.nextElementSibling;
            td_date = work_name.nextElementSibling.className.split(" ");
        }
    }
    weektime();
}

function depart_select() {
    var value = document
        .getElementById("box_select")
        .value;
    var depart = ["인사", "개발", "영업"];
    for (var i = 0; i < 3; i++) {
        if (depart[i] != value) {
            var s_d = document.getElementsByClassName(depart[i]);
            for (var j = 0; j < s_d.length; j++) {
                s_d[j].style.display = "none";
            }
        } else {
            var s_d = document.getElementsByClassName(depart[i]);
            for (var j = 0; j < s_d.length; j++) {
                s_d[j].style.display = "block";
            }
        }
    }
}

function tableselect() {
    var value = document
        .getElementById("tableselect_")
        .value;
    var depart = ["인사table", "개발table", "영업table"];
    for (var i = 0; i < 3; i++) {
        if (depart[i] != value) {
            var s_d = document.getElementsByClassName(depart[i]);
            for (var j = 0; j < s_d.length; j++) {
                s_d[j].style.display = "none";
            }
        } else {
            var s_d = document.getElementsByClassName(depart[i]);
            for (var j = 0; j < s_d.length; j++) {
                s_d[j].setAttribute('style', " ")
            }
        }
    }
}

function weektime(){
    var work_name = document.getElementsByClassName("work_name");
    for(var i = 0 ; i < work_name.length ; i++){
       var w_name = work_name[i].innerText
        var d_name = w_name+"_";
        var di_name = document.getElementsByClassName(d_name);
        var temp = 0;
        for(var j = 0 ; j < di_name.length ; j++){
            var v1 = di_name[j].firstElementChild.innerText;
            v1 = v1.split(':')
            v1 = v1[1];
            if(di_name[j].lastChild.innerText == ""){
                continue;
            }
            var v2 = di_name[j].lastChild.innerText;
            v2 = v2.split(':')
            v2 = v2[1];
            if(v2 >= v1 ){
                temp = v2 -v1+ temp;
            }
            else{
                var cnt = 0;
                for(var k = v2 ; k <= v1 ; k++){
                    if(k == 24){
                        k = 0;
                    }
                    cnt = cnt + 1
                }
                temp = cnt + temp;
            }
        }
        work_name[i].parentNode.lastElementChild.innerText = temp;
    }
}


function map22(latitude,longitude){
  var geocoder = new kakao.maps.services.Geocoder();
 var coord = new kakao.maps.LatLng(36.3719205,127.3506555);
  var callback = function(result, status) {
      if (status === kakao.maps.services.Status.OK) {
          map_ = result[0].address.address_name;
      }
      map_ = result[0].address.address_name;
  };
  geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
}


function run(){    
    arrayfilter();
    tableCreate();
    fildtable();
}
function run2(){
    arrayfilter();
    getTotalReports();
}

setTimeout(function () {
    my_info()
    
    arrayfilter();
    tableCreate();
    fildtable();
}, 1000);

setTimeout(function () {
    my_info()
    getTotalReports();
    arrayfilter();
 
}, 2000);
setTimeout(function () {
run()
}, 5500);

=======
var today = new Date();
var year = today.getFullYear(); // 년도
var month = today.getMonth() + 1; // 월
var date = today.getDate(); // 날짜

let allWorkInfo;
function arrayfilter() {
    fetch('http://wantae.tk:8080/api/allWorkInfo?id=test1')
        .then(
            res => res.json()
        )
        .then(function (data) {
            allWorkInfo = data;
        });
}
function filterarray(){
  test = new Array;
    for (let i = 0; i < allWorkInfo.length; i++) {
        test.unshift(allWorkInfo[i]["id"]);
    }
    var single2_ = test.filter((item, idx, array) => {
        return array.indexOf(item) === idx;
    });
    return single2_;
}
let getTotalRepo;

function getTotalReports() {
    var repo_name = document.getElementsByClassName("repo_name");
    var depart_lepo = document.getElementsByClassName("depart_lepo");
    var title_lepo = document.getElementsByClassName("title_lepo");
    fetch('http://wantae.tk:8080/api/getTotalReports?id=test1')
        .then(
            res => res.json()
        )
        .then(function (data) {
            getTotalRepo = data;
        });

    test1 = new Array;
    for (let i = 0; i < getTotalRepo.length; i++) {
        test1.unshift(getTotalRepo[i]["id"]);
    }
    console.log(test1);
    let single3 = test1.filter((item, idx, array) => {
        return array.indexOf(item) === idx;
    });
    console.log(single3);
    for (var i = 0; i < single3.length; i++) {
        repo_name[i].innerText = single3[i];
        for (var j = 0; j < getTotalRepo.length; j++) {
            if (repo_name[i].innerText == getTotalRepo[j]["id"]) {
                depart_lepo[i].innerText = getTotalRepo[j]["Reports"]["Title"];
                title_lepo[i].innerText = getTotalRepo[j]["Department"];
                title_lepo[i]
                    .parentNode
                    .setAttribute('class', 'list col-md-3 ' + getTotalRepo[j]["Department"]);
                break;
            }
        }

    }
}

// function loadDoc() {
//     fetch('http://wantae.tk:49160/api/test?id=test1')
//         .then(res => res.json())
//         .then(function (data) {
//             c = data;
//             getTotalReponsole.log(data)
//         });

//     fetch('http://wantae.tk:49160/api/test?id=test1')
//         .then(res => res.json())
//         .then(data => getTotalReponsole.log(data))

// }

function map() {
    navigator
        .geolocation
        .getCurrentPosition(function (pos) {
            var map_;
            var latitude = pos.getTotalRepoords.latitude;
            var longitude = pos.getTotalRepoords.longitude;
            var geogetTotalRepoder = new kakao
                .maps
                .services
                .GeogetTotalRepoder();
            var getTotalRepoord = new kakao
                .maps
                .LatLng(latitude, longitude);
            var callback = function (result, status) {
                if (status === kakao.maps.services.Status.OK) {
                    map_ = result[0].address.address_name;
                    getTotalReponsole.log(map_);
                }
            };
            geogetTotalRepoder.getTotalRepoord2Address(
                getTotalRepoord.getLng(),
                getTotalRepoord.getLat(),
                callback
            );
        });

}

function modal(this_id) {
    var modal = document.getElementById("upload_");
    modal.style.display = "block";
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
let myinfo;
function my_info(){
    fetch('http://wantae.tk:8080/api/AccountInformation?id='+sessionStorage.getItem('userName'))
    .then(
        res => res.json()
    )
    .then(function (data) {
        myinfo = data;
    });
    document.getElementById('my_name').innerText = myinfo['Name'];
    document.getElementById('my_week').innerText = myinfo['WorkingTimePerWeek'];
    document.getElementById('my_com').innerText = myinfo['Company'];
    document.getElementById('my_dep').innerText = myinfo['Department'];
    document.getElementById('my_email').innerText = myinfo['Email'];

}
function login() {


    if (sessionStorage.getItem('userName') != null) {
        document
            .getElementById("login_")
            .innerHTML = sessionStorage.getItem('userName') + "환영합니다";
        document
            .getElementById('login_')
            .style
            .fontSize = "23px";
        document
            .getElementById('sing')
            .style
            .display = "none";
            //         
    }

}

function check() {
    let today = new Date();

    let hours = today.getHours(); // 시
    let minutes = today.getMinutes(); // 분
    let segetTotalReponds = today.getSegetTotalReponds(); // 초
    let millisegetTotalReponds = today.getMillisegetTotalReponds(); // 밀리초
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1; // 월
    let date = today.getDate(); // 날짜
    let day = today.getDay(); // 요일
    getTotalReponsole.log(
        hours + ':' + minutes + ':' + segetTotalReponds + ':' +
        millisegetTotalReponds
    );
    getTotalReponsole.log(year + '/' + month + '/' + date)

}

function search() {
    var sea = document
        .getElementById("search")
        .value
    var name = document.getElementsByClassName("work_name");
    for (var i = 0; i < name.length; i++) {
        if (sea == document.getElementsByClassName("work_name")[i].innerText) {
            document.getElementsByClassName("work_name")[i].parentNode.style.backgroundColor = "#b8b4b4";
        }
    }
}

function not_searh() {
    var sea = document
        .getElementById("search")
        .value
    var name = document.getElementsByClassName("work_name");
    for (var i = 0; i < name.length; i++) {
            document.getElementsByClassName("work_name")[i].parentNode.setAttribute("style"," ")
        
    }
}

function modal_2(this_id) {
    var modal = document.getElementById("upload_2");
    modal.style.display = "block";
    var repo_id = document.getElementById(this_id);
    repo_id = repo_id.firstElementChild.innerText;
    var parent = document
        .getElementsByClassName("report_list_2")[0]
        .parentNode;
    parent.removeChild(document.getElementsByClassName("report_list_2")[0]);
    var temp = document.createElement("div");
    temp.setAttribute("class", "report_list_2");
    parent.appendChild(temp);
    for (var i = 0; i < getTotalRepo.length; i++) {
        if (repo_id == getTotalRepo[i]["id"]) {
            var p1 = document.createElement("p");
            var p2 = document.createElement("p");
            var p3 = document.createElement("p");
            p1.innerText = getTotalRepo[i]["Reports"]["Title"];
            p2.innerText = getTotalRepo[i]["Reports"]["Contents"];
            p3.innerText = getTotalRepo[i]["Reports"]["submitTime"];
            document
                .getElementsByClassName("report_list_2")[0]
                .append(p1);
            document
                .getElementsByClassName("report_list_2")[0]
                .append(p2);
            document
                .getElementsByClassName("report_list_2")[0]
                .append(p3);
        }
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

Date.prototype.getWeek = function (start) {
    //Calcing the starting point
    start = start || 0;
    var today = new Date(this.setHours(0, 0, 0, 0));
    console.log("    :" + today);
    var day = today.getDay() - start;
    var date = today.getDate() - day;
    // Grabbing Start/End Dates
    var StartDate = new Date(today.setDate(date));
    var EndDate = new Date(today.setDate(date + 6));
    return [StartDate, EndDate];
}

function tabledata() {
    var temptime = gettime();
    tableCreate_2(temptime);
    fildtable();
}

function gettime() {
    var data_ = document
        .getElementById("work_date")
        .value;
    console.log(data_)
    data_ = data_.split('-')
    var start
    start = start || 0;
    var today = new Date(data_[0], data_[1] - 1, data_[2], 0, 0, 0);
    console.log("    :" + today);
    var day = today.getDay() - start;
    var date = today.getDate() - day;
    // Grabbing Start/End Dates
    var StartDate = new Date(today.setDate(date));
    StartDate = StartDate.toLocaleDateString();
    console.log(StartDate);
    return StartDate;
}

// test getTotalRepode
var Dates = new Date().getWeek();
var StartDate = Dates[0].toLocaleDateString();
var EndDate = Dates[1].toLocaleDateString();

function tableCreate() {
    //body reference
    var thead_ = document.getElementById("work_table");
    if (document.getElementById("tblBody") != null) {
        thead_.removeChild(document.getElementById("tblBody"));
    }
    var tblBody = document.createElement("tbody");
    tblBody.setAttribute("id", "tblBody");
    var t = StartDate.split('.');
    var name = filterarray();
    for (var j = 0; j < name.length; j++) {
        var row = document.createElement("tr")
        var temp = Number(t[2])
        var tabledate = t[0] + "-" + t[1].trim() + "-" + Number(t[2])
        for (var i = 0; i < 9; i++) {

            var cell = document.createElement("td");
            if (i == 0) {
                cell.setAttribute('class', 'work_td work_name ');
                cell.setAttribute('id', name[j]);
                cell.innerText = name[j];
            } else if (i != 8) {
                temp = Number(t[2]) + Number(i)
                tabledate = t[0] + "-" + t[1].trim() + "-" + temp
                cell.setAttribute('class', 'work_td ' + tabledate)
            } else {
                cell.setAttribute('class', 'work_td ')
            }

            row.appendChild(cell);
        }

        //row added to end of table body
        tblBody.appendChild(row);
    }
    // append the <tbody> inside the <table>
    thead_.appendChild(tblBody);
}

function tableCreate_2(S_data) {
    //body reference
    var thead_ = document.getElementById("work_table");
    if (document.getElementById("tblBody") != null) {
        thead_.removeChild(document.getElementById("tblBody"));
    }
    var tblBody = document.createElement("tbody");
    tblBody.setAttribute("id", "tblBody");
    var t = S_data.split('.')
    console.log(t);
    var name = filterarray();
    console.log(" name  :"+name);
    for (var j = 0; j < name.length; j++) {
        var row = document.createElement("tr")
        var temp = Number(t[2])
        var tabledate = t[0] + "-" + t[1].trim() + "-" + Number(t[2])
        for (var i = 0; i < 9; i++) {
            var cell = document.createElement("td");
            if (i == 0) {
                cell.setAttribute('class', 'work_td work_name ');
                cell.setAttribute('id', name[j]);
                cell.innerText = name[j];
            } else if (i != 8) {
                temp = Number(t[2]) + Number(i)
                tabledate = t[0] + "-" + t[1].trim() + "-" + temp
                cell.setAttribute('class', 'work_td ' + tabledate)
            } else {
                cell.setAttribute('class', 'work_td ')
            }
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }
    thead_.appendChild(tblBody);
}
var map_;
function fildtable() {
  var name = filterarray();
  for(var i = 0 ; i <name.length ; i++){
    for(var j = 0 ; j < allWorkInfo.length ; j++){
      if(name[i] == allWorkInfo[j]["id"] ){
        document.getElementById(name[i]).parentNode.setAttribute('class',allWorkInfo[j]["Department"]+'table')
        break;
      }
    }
  }
    for (let i = 0; i < allWorkInfo.length; i++) {
        var work_name = document.getElementById(allWorkInfo[i]["id"]);
        if (allWorkInfo[i]["TimeTable"]["workOn"] == undefined) 
            continue;
        var work = allWorkInfo[i]["TimeTable"]["workOn"].split('T')
        var work_on = work[0];
        var work_start_time = work[1].split('.');
        work_start_time = work_start_time[0];
        var td_date = work_name.nextElementSibling.className.split(" ");
        for (var j = 0; j < 7; j++) {
            if (td_date[1] == work_on) {
                var div_ = document.createElement("div");
                var p1 = document.createElement("p");
                p1.innerText = "출근 : " + work_start_time
                // work_name.nextElementSibling.innerText = work_start_time;
                if (allWorkInfo[i]["TimeTable"]["workOff"] != undefined) {
                    var work_off = allWorkInfo[i]["TimeTable"]["workOff"].split('T')
                    var work_end_time = work_off[1].split('.');
                    work_end_time = work_end_time[0];
                    var p2 = document.createElement("p");
                    p2.innerText = "퇴근 : " + work_end_time;
                    div_.appendChild(p1);
                    div_.appendChild(p2);   
                    map22();
                    div_.setAttribute("class","w_o_d");
                    div_.setAttribute("title",map_);
                } else {
                    div_.appendChild(p1);
                }
                work_name
                    .nextElementSibling
                    .appendChild(div_);
              
            }
            work_name = work_name.nextElementSibling;
            td_date = work_name
                .nextElementSibling
                .className
                .split(" ");
        
        }
    }
}

function depart_select() {
    var value = document
        .getElementById("box_select")
        .value;
    var depart = ["인사", "개발", "영업"];
    for (var i = 0; i < 3; i++) {
        if (depart[i] != value) {
            var s_d = document.getElementsByClassName(depart[i]);
            for (var j = 0; j < s_d.length; j++) {
                s_d[j].style.display = "none";
            }
        } else {
            var s_d = document.getElementsByClassName(depart[i]);
            for (var j = 0; j < s_d.length; j++) {
                s_d[j].style.display = "block";
            }
        }
    }
}

function tableselect() {
    var value = document
        .getElementById("tableselect_")
        .value;
    var depart = ["인사table", "개발table", "영업table"];
    for (var i = 0; i < 3; i++) {
        if (depart[i] != value) {
            var s_d = document.getElementsByClassName(depart[i]);
            for (var j = 0; j < s_d.length; j++) {
                s_d[j].style.display = "none";
            }
        } else {
            var s_d = document.getElementsByClassName(depart[i]);
            for (var j = 0; j < s_d.length; j++) {
                s_d[j].setAttribute('style', " ")
            }
        }
    }
}

function map22(latitude,longitude){
  var geocoder = new kakao.maps.services.Geocoder();
 var coord = new kakao.maps.LatLng(36.3719205,127.3506555);
  var callback = function(result, status) {
      if (status === kakao.maps.services.Status.OK) {
          map_ = result[0].address.address_name;
      }
      map_ = result[0].address.address_name;
  };
  geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
}


function run(){    
    arrayfilter();
    tableCreate();
    fildtable();
}
function run2(){
    arrayfilter();
    getTotalReports();
}

setTimeout(function () {
    my_info()
    
    arrayfilter();
    tableCreate();
    fildtable();
}, 1000);

setTimeout(function () {
    my_info()
    getTotalReports();
    arrayfilter();
 
}, 2000);
setTimeout(function () {
run()
}, 5500);

>>>>>>> 0bd36ab9249388889d22287bc96a2be20f17295c
