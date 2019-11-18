function check() {
  
    var id = document.getElementById("id");
    var pw = document.getElementById("pw_");
    var checkpw = document.getElementById("pwcheck");
    var email = document.getElementById("email_");
    var name = document.getElementById("name_");
    var checkbox = document.getElementById("agree_");
  
    var idpattern = /^[A-Za-z]{1}[A-Za-z0-9]{4,19}$/;
    var pwPattern = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
    var emailPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    var namePattern = /^[가-힣]{2,}$/;
  
    var idn = false;
    var pwn = false;
    var emn = false;
    var nan = false;
  
  
    if (idpattern.test(id.value) != true) {
      alert("형식에 맞게 아이디를 입력해주세요.");
    }
    else idn= true;
    if (pwPattern.test(pw.value) != true) {
      alert("형식에 맞게 비밀번호를 입력해주세요.");
    } else {
      if (pwPattern.test(checkpw.value) != true) {
        alert("비밀번호가 일치하지 않습니다.");
      }
      else pwn = true;
    }
  
    if (emailPattern.test(email.value) != true) {
      alert("이메일을 올바르게 입력해주세요.");
    }
    else emn = true;
  
    if (namePattern.test(name.value) != true) {
      alert("이름을 알맞게 입력해주세요.");
    }
    else nan = true;
  
  
    if(idn&&pwn&&emn&&nan){
      checkbox.checked = true;
    }
    else checkbox.checked = false;
  }