var colours=["yellow","pink","violet","red","green","blue"];
var blocks=["#b1","#b2","#b3","#b4","#b5","#b6"];

let timerID;
$("#btnStart").on('click',function(){
    clearInterval(timerID);
    timerID=setInterval(changeColour, 600);
});

$("#btnStop").on('click',function(){
    clearInterval(timerID);
});

function changeColour(){
    for(var i=0; i<6; i++){
        $(blocks[i]).css('background',colours[i]);
    }
    var last=colours[5];
    for(var i=5; i>0; i--){
        colours[i]=colours[i-1];
    }
    colours[0]=last;
}