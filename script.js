let introblock1 = document.getElementById("introblock1");
let introblock2 = document.getElementById("introblock2");
let introblock3 = document.getElementById("introblock3");

let introdes1 = document.getElementById (" introdes1 ");
let introdes2 = document.getElementById (" introdes2 ");
let introdes3 = document.getElementById (" introdes3 ");

// sign in 
let accountemail = "admin"
let accountpassword ="password"

function signin(){
    let email = document.getElementById("email").value;
    let password= document.getElementById("password").value;
    let caseblock = document.getElementById("checkcase")
    
    if (email == accountemail && password == accountpassword){
        caseblock.style.display = "block";
        caseblock.innerHTML = "Sign in successful"
        caseblock.style.color = "green"
        console.log(email)
        console.log(password);
    }
    else{
        caseblock.style.display = "block";
        caseblock.style.color = "red"
    }
}

// sign up
function signup(){
    let email = document.getElementById("email").value;
    let password= document.getElementById("password").value;
    let name = document.getElementById("name").value;
    let caseblock = document.getElementById("checkcase")


    let listuser = JSON.parse(localStorage.getItem("listuser"));
    let listpassword = JSON.parse(localStorage.getItem("listpassword"));
    let listusername = JSON.parse(localStorage.getItem("listusername "));
    let isaccountexist = false;

    if (listuser == null){
        if (email == "" ||password == "" ||name == ""){
            console.log("Error");
            caseblock.style.display = "block";
            caseblock.style.color ="red";
        }
        else{
        listuser=[email];
        listpassword=[password]
        listusername=[name]

        localStorage.setItem("listuser",listuser);
        localStorage.setItem("listpassword", listpassword);
        localStorage.setItem("listusername", listusername);

        caseblock.style.display = "block";
        caseblock.innerHTML = "Sign up successful"
        caseblock.style.color = "green"

        console.log ("okk")
        console.log("name:", name);
        console.log("email:", email);
        console.log("password:", password);
        }
    }
    else {
        if (email == "" ||password == "" ||name == ""){
        console.log("Error");
        caseblock.style.display = "block";
        caseblock.style.color ="red";
    }
    else{
        for(let i=0; i<listuser.length, i++;){
            if (email===listuser[i]){
                caseblock.innerHTML = "Account already exist, please use a different email";
                caseblock.style.color ="red"
                caseblock.display="bloack"
                isaccountexist = true;
            }
        }
        if (!isaccountexist){
            listuser.push(email);
            listpassword.push(password)
            listusername.push(name)

            localStorage.setItem("listuser", JSON.stringif(listuser));
            localStorage.setItem("listpassword", JSON.stringif(listpassword));
            localStorage.setItem("listusername", JSON.stringif(listusername));
            caseblock.style.display = "block";
            caseblock.innerHTML = "Sign up successful"
            caseblock.style.color = "green"
            console.log ("okk")
            console.log("name:", name);
            console.log("email:", email);
            console.log("password:", password);
        }
    }
} 
}