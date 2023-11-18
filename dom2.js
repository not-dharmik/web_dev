var highlight= document.getElementById("highlight");
var bold = document.getElementsByClassName("bolding");
var change = true;
setInterval(function(){
    if(change){
        highlight.style.background = "red";
    }else{
        bold.style.background = "pink";
    }
    change = !change;

},500);
