const windowInnerHeight = window.innerHeight;
const pageHeight = document.documentElement.scrollHeight;

const totalHeight = pageHeight-windowInnerHeight;

const background = document.getElementById("background");
const car = document.getElementById("car");

const change1 = (((document.getElementById("change1").offsetTop+car.offsetTop+totalHeight)/totalHeight)-1)*100;
const change2 = (((document.getElementById("change2").offsetTop+car.offsetTop+totalHeight)/totalHeight)-1)*100;

const values = [change1,change2];
const pics = ["biltur_1.png","biltur_2.png","biltur_3.png"];

var width = 1.5;
var minOpac = 0;

window.addEventListener("scroll", function() {
    var pos = window.pageYOffset;
    pos = (((pos+totalHeight)/totalHeight)-1)*100;
    changeBackground(values,pics,pos);
    console.log();

}, false);

function changeBackground(values,pics,pos){

    if(pos < values[0]){
        changeImage(pics[0]);
    }else if(pos > values[values.length-1]){
        changeImage(pics[pics.length-1]);
    }else{
        changeImage(pics[1]);
    }

    var avg = (values[0]+values[1])/2; 

    if(pos < avg){
        car.style.backgroundImage = "url("+pics[0]+")";
    }else{
        car.style.backgroundImage = "url("+pics[pics.length-1]+")";
    }

    var opac = 1;

    for(let i=0; i<values.length; i++){
        if(pos > values[i]-width && pos < values[i]+width){
            var opac = ((Math.abs(values[i]-pos)/width)+minOpac)/(1+minOpac);
        }
    }

    changeOpacity(opac);
    
}

function changeImage(image){   
    background.style.backgroundImage = "url("+image+")";
}

function changeOpacity(value){
    background.style.opacity = value;
}