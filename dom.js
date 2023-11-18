var body= document.querySelector("body");
var isYellow = true;
setInterval(function(){
    if(isYellow){
        body.style.background = "green";
    }else{
        body.style.background= "yellow";
    }
    isYellow = !isYellow;

},1000);
