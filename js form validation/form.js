const name = document.getElementById("name"); 
const email = document.getElementById("email"); 
const password = document.getElementById("password"); 
const con_password = document.getElementById("con_password"); 
const signup = document.getElementById("signup");
let error = document.getElementById("error");


signup.button.addEventListener("click", () => {
    form_validate();
});

function form_validate(){
    if(name.value == "" || email.value == "" || password.value == "" || con_password.value == "")
    {
        error.innerHTML = "* All field must be filled !";
    }
    else
    {
        error.innerHTML = "successfully registered !";
    }
}
