function verifyForm()
{
    let password = document.getElementById("password").value;
    let retypePassword = document.getElementById("retype password").value;
    if (password != retypePassword)
    {
        document.getElementById("password").style.border = "rgb(170, 20, 20) 1px solid";
        document.getElementById("retype password").style.border = "rgb(170, 20, 20) 1px solid";
        document.getElementById("error").innerHTML = "Passwords didn't match";
    }
}