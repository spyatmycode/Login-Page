var loader = document.getElementById('loader');

window.addEventListener(
    "load", function () {
        document.getElementById('loader').style.display = "none";
    }
)


button = document.getElementById("signin");

// button.addEventListener("click",

//     function(){
//         if(password == "admin" && username == "admin"){
//             alert("Login Successful");

//             window.open("http://akejuoluwanifemi-portfolio.netllify.app")
//         }
//         else{
//             alert("Login Failed");

//         }


//     }

// )

function verify() {

    var password = document.getElementById("password").value;
    var username = document.getElementById("username").value;

    if (password == "admin" && (username == "admin" || username == "akejuoluwanifemi11@gmail.com")) {
        alert("Login Successful");
        window.open("http://akejuoluwanifemi-portfolio.netllify.app");
    }
    else {
        alert("Login Failed");

       





    }

}













