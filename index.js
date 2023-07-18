function verifyForm(){
    if (verifyEmail() && verifyPassword()){
        window.location = "Registered.html";
    }
}

function verifyEmail(){
    let email = document.getElementById("email").value;
    let emailRegex = /^\w+@\w+\.[a-z]+/;

    if (!emailRegex.test(email))
    {
        document.getElementById("email").style.borderColor = "rgb(226, 33, 33)";
        document.getElementById("error").innerHTML = "Email format: abc@def.xyz";
        return false;
    } else {
        document.getElementById("email").style.borderColor = "rgb(129, 129, 129)";
        return true;
    }
}

function verifyPassword(){
    let password = document.getElementById("password").value;
    let retypePassword = document.getElementById("retype-password").value;

    if(password.length < 4){
        document.getElementById("password").style.borderColor = "rgb(226, 33, 33)";
        document.getElementById("error").innerHTML = "Minimum password length: 4";
        return false;
    } else if (password != retypePassword) {
        document.getElementById("password").style.borderColor = "rgb(226, 33, 33)";
        document.getElementById("retype-password").style.borderColor = "rgb(226, 33, 33)";
        document.getElementById("error").innerHTML = "Passwords didn't match";
        return false;
    } else {
        document.getElementById("password").style.borderColor = "rgb(129, 129, 129)";
        document.getElementById("retype-password").style.borderColor = "rgb(129, 129, 129)";
        return true
    }
}

function returnHome(){
    window.location = "index.html";
}