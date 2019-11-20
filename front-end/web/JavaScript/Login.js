function login(){

    sessionStorage.setItem('userName', document.getElementById("id").value);
    location.href="./my_page.html";
}