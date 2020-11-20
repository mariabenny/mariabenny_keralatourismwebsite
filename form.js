let email = document.getElementById("email");
let error = document.getElementById("error");
let pwd = document.getElementById("pwd");
// const indicator =document.querySelector(".indicator");
// const input =document.querySelector(".input");
// const weak =document.querySelector(".weak");
// const medium =document.querySelector(".medium");
// const strong =document.querySelector(".strong");
// const text =document.querySelector(".text");

// function trigger(){
//     if(input.value != ""){
//             indicator.style.display = "block";
//             indicator.style.display = "flex";
// }else{

// }


function validate(){
    let regexp =/^([A-Za-z0-9\.\-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
    let regpas =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/
    if((regexp.test(email.value))&&(pwd.value.length>=8)&&(regpas.test(pwd.value))){
        error.innerHTML="VALID";
        error.style.color="green";
        return true;
    }
    else{
        error.innerHTML="INVALID";
        error.style.color="red";
        return false;
    }
   
}


