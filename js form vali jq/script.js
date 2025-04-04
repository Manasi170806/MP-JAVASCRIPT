$("#btn").on("click" , function() {
    const emailvalidator = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    const email = $("#email").val();
    const password = $("#password").val();
    const con_password = $("#con_password").val();

    isValid = true;

    console.log(email,password,con_password);

    if(email === "" || !emailvalidator.test(email))
    {
        $("#err").text("* E-mail is invalid !!");
        isValid = false;
    }

    if(password == "" || con_password == "" || !passwordValidator.test(password))
    {
        isValid = false;
        $("#err1").text("* password formate not accepted !!");
    }

    if(password != con_password)
    {
        isValid = false;
        $("#err1").text("* password is not same !");
    }

    if(isValid) 
    {
        $("#status").text("* Signup successfully!");
    } 
    else 
    {
        $("#status").text("* Signup failed!");
    }
});
