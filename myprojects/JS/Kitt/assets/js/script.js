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
    $(blocks[index]).css('background',"red");
    if(round%2==0){
        index++;
    }else{
        index--;
    }
    if(index==6 | index==0){
        round++;
    }
}

