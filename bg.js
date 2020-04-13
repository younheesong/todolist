const body = document.querySelector("body");

const IMG_NUMBER=6;



function paintImange(imgNumber){
    const image = new Image();
    image.src = `image/${imgNumber +1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom(){
    const number = Math.floor(Math.random()*6); 
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImange(randomNumber);
}

init();