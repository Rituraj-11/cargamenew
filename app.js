window.history.forward();
        function noBack() {
            window.history.forward();
        }

let sign_form=document.querySelector('.signup');

let input_name=document.getElementById('name');
let input_email=document.getElementById('email');
let input_password=document.getElementById('password');
let input_confirm_password=document.getElementById('confirm-password');

sign_form.addEventListener('submit',validate);

function validate(e){
    let name=input_name.value;
    let email=input_email.value;
    let password=input_password.value;
    let confirm_password=input_confirm_password.value;

    if(countSpaces(name)<1){
        alert("Name should be 2 words")
    }

    
}

function countSpaces(str){
    str=str.trim();
    let c=0;
    for(let t of str){
        if(t==' '){
            c++;
        }
    }
    return c;

    // let arr=str.split(' ');
    // return arr.length-1;
}