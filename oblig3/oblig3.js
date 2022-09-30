const windowInnerHeight = window.innerHeight;
const pageHeight = document.documentElement.scrollHeight;

const totalHeight = pageHeight-windowInnerHeight;

const water = document.getElementById("water");

const change0 = (((document.getElementById("water0").offsetTop+totalHeight)/totalHeight)-1)*100;
const change1 = (((document.getElementById("water56").offsetTop+totalHeight)/totalHeight)-1)*100;
const change2 = (((document.getElementById("water32").offsetTop+totalHeight)/totalHeight)-1)*100;

const wave1 = [-120,-44,change0,change1,"picture"];
const wave2 = [-120,-68,change1,change2,"picture2"];

var width = 1;
var minOpac = 0.2;

window.addEventListener("scroll", function() {
    var pos = window.pageYOffset;
    pos = (((pos+totalHeight)/totalHeight)-1)*100;
    changeBackground(pos,wave1);
    changeBackground(pos,wave2);
    changeBackground2(pos);
}, false);

function changeBackground(pos,wave){
    if(pos < wave[2]){
        var bot = wave[0];
    }else if(pos > wave[3]){
        var bot = wave[1];
    }else{
        var bot = wave[1]+(wave[3]-pos)*(wave[0]-wave[1])/(wave[3]-wave[2]);
    }

    document.getElementById(wave[4]).style.bottom = String(bot)+"%";

    var opac = 1/(((Math.abs(change0-pos)/width)+minOpac)/(1+minOpac));

    console.log(opac);

    changeOpacity(opac);

}

function changeBackground2(pos){
    if(pos <= change0){
        document.getElementById("pictures").style.backgroundImage = "url(BG2.jpg)";
        document.getElementById("scaleImage").style.opacity = 0;
    }else{
        document.getElementById("pictures").style.backgroundImage = "url(BG3.jpg)";
        document.getElementById("scaleImage").style.opacity = 1;
    }
    
}


function changeOpacity(value){
    document.getElementById("whiteImage").style.opacity = value;
}