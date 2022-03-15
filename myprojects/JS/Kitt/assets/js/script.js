//var colours=["yellow","pink","violet","red","green","blue"];
var blocks=["#b1","#b2","#b3","#b4","#b5","#b6","#b7"];

let timerID;
$("#btnStart").on('click',function(){
    clearInterval(timerID);
    timerID=setInterval(changeColour, 100);
});

$("#btnStop").on('click',function(){
    clearInterval(timerID);
});


let round=0;
let index=4
function changeColour(){
    for(var i=0; i<7; i++){
        $(blocks[i]).css('background',"white");
    }
    $(blocks[index-2]).css('background',"#ff0707");
    $(blocks[index-1]).css('background',"#d00202");
    $(blocks[index]).css('background',"#aa0404");
    $(blocks[index+1]).css('background',"#d00202");
    $(blocks[index+2]).css('background',"#ff0707");
    if(round%2==0){
        index++;
    }else{
        index--;
    }
    if(index==6 | index==0){
        round++;
    }
}

