const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");


const USER_LS = "currentUser",
    showing_CN = "showing"

function saveName(text){
    localStorage.setItem(USER_LS, text);
}


function handleSubmit(event){
    event.preventDefault();
    const currnetValue=input.value;
    paintGreeting(currnetValue);
    saveName(currnetValue);
}   
function askForName(){
    form.classList.add(showing_CN);
    form.addEventListener("submit", handleSubmit);
}
function paintGreeting(text){
    form.classList.remove(showing_CN);
    greeting.classList.add(showing_CN);
    greeting.innerText = `hello ${text}`;
}

function loadName(){ 
    const currnetUser= localStorage.getItem(USER_LS);
    if (currnetUser=== null){
        askForName();
    }else{
        paintGreeting(currnetUser);
    }
}
function init(){
    loadName();
}

init();