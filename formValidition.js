const emailEl = document.getElementById('email');
const passWordEl = document.getElementById('password');
const errorMsg = document.querySelector('.errorMsg');
const errorMsg1 = document.querySelector('.errorMsg1');

const form = document.querySelector('.loginpage');


form.addEventListener('submit', function(e){
   // e.preventDefault();
    let message = [];
    let message1 = '';
    //e.preventDefault();
    if(passWordEl.value.length < 1 ) {
        message1 += "password can not be empty";
        e.preventDefault();
    }
    if(emailEl.value.length <= 1){
        e.preventDefault();
         message.push('Email can not be empty');
     }
   /*if(passWordEl.value.length != 4){
       message1 += "password must be more than 4 digit";
       e.preventDefault();
    //errorMsg.innerHTML = message;*/
   /* }*/
    if(message.length <= 14){
    //e.preventDefault();
    errorMsg1.innerHTML = message;
    errorMsg.innerHTML = message1;
    errorMsg.style.color = "red";
    errorMsg1.style.color = "red";
    }
});