function myfunction(){
    var x = document.getElementById("pass");

    if(x.type === "password"){
        x.type = "email";
    }
    else{
        x.type = "password"
    }
}

function validate(){
    var password = document.getElementById("pass");
    var length = document.getElementById("length")

    if(password.value.length >= 8){
        alert("Login Succesfull");
        window.location.replace("welcome.html");
        return false;
    }
    else{
        alert("Login Failed");
    }
}
