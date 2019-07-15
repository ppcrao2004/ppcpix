
function passWord() {
    var testV = 1;
    var pass1 = prompt('Please Enter Your Password',' ');
    while (testV < 3) {
        if (!pass1)
            window.location="../index.html";
        if (pass1.toLowerCase() == "letmein") {
            alert('You Got it Right!');
            window.open('energyLake.html');
            break;
        }
        testV+=1;
        var pass1 =
            prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
    }
    if (pass1.toLowerCase()!="password" & testV ==3)
        window.location="../index.html";
    return " ";
}
