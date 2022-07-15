const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

function error(input, message){
    input.className = 'form-control is-invalid'
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
};

function success(input){
    input.className = 'form-control is-valid'
};

function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(re.test(input.value)){
        success(input);
    }else if((input.value === '')){
        error(input, input.id+' is required.')
    }else{
        error(input, 'wrong '+input.id+' format.'); 
    }
};

function checkRequired(inputs){
    inputs.forEach(function(input){
        if(input.value === ''){
            error(input, `${input.id} is required.`)
        }else{
            success(input);
        }
    })
};

function checkLength(input,min,max){
    if(input.value.length>=min && input.value.length<=max){
        success(input);
    }else{
        error(input, `Please write between ${min} and ${max} characters.`)
    }
};

function checkNumber(input){
    var expression = /^\d{10}$/;
    if(!expression.test(input.value))
    error(input,'You entered a missing number. (10char)')
};

function checkPassword(input1,input2){
    if(input1.value !== input2.value){
        error(input2,'Passwords not same.')
    }
};

form.addEventListener('submit',function(e){
    e.preventDefault();
    checkRequired([username,email,phone,password,repassword]);
    checkEmail(email);
    checkNumber(phone);
    checkLength(username,6,14);
    checkLength(password,8,14);
    checkPassword(password,repassword);
});