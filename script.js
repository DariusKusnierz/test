var elem = document.getElementById("imgMan");
var time = setInterval("changeMove(elem)",200);
var upScore = 1;
var scorePoint = 0;
var timescore = setInterval("addScore()",1000);

function changeMove(id){
    // console.log(id.src);
    if(id.src == "http://127.0.0.1:5500/test/images/manL.png") {
        id.src = "images/manR.png";
    } else{
        id.src = "images/manL.png";
    }
    // id.src = "images/manR.png";
    move();
    // setTimeout(changeMove(el),100000);
    // clearTimeout(time);
}

function move(){
    var rand = Math.floor(Math.random() * 4);
    // console.log("rand:"+rand);
    var man = document.getElementsByClassName("man");
    var stylus = getComputedStyle(man[0]);
    
    switch(rand){
        case 0: man[0].style.top = "calc("+stylus.top+" + 50px)"; break;
        case 1: man[0].style.top = "calc("+stylus.top+" - 50px)"; break;
        case 2: man[0].style.left = "calc("+stylus.left+" + 50px)"; break;
        case 3: man[0].style.left = "calc("+stylus.left+" - 50px)"; break;
    }
    outBoard(stylus,man);
}

function outBoard(stylus, man){
    
    if(parseInt(stylus.top,10)<0){
        man[0].style.top = "calc("+stylus.top+" + 50px)";
    }else if(parseInt(stylus.top,10)>350){
        man[0].style.top = "calc("+stylus.top+" - 50px)";
    }
    if(parseInt(stylus.left)<0){
        man[0].style.left = "calc("+stylus.left+" + 50px)";
    }else if(parseInt(stylus.left,10)>1725){
        man[0].style.left = "calc("+stylus.left+" - 50px)";
    }
    // console.log("left:"+man[0].style.left);
    // console.log("top:"+man[0].style.top);
    // time = setTimeout(changeMove(el),1000);
    // clearTimeout(time);
    
}

function addScore(){
    var score = document.getElementById("score");
    scorePoint += upScore;
    score.innerHTML = "Score: "+scorePoint;
}
function addOneScore(){
    var score = document.getElementById("score");
    scorePoint++;
    score.innerHTML = "Score: "+scorePoint;
}


function morePoint(many){
    // upScore += many;
    
    
    switch(many){
        case 1: if(scorePoint>10){scorePoint -= 10;upScore += many;addScore();} break;
        case 10: if(scorePoint>50){scorePoint -= 50;upScore += many;addScore();}  break;
        case 50: if(scorePoint>200){scorePoint -= 200;upScore += many;addScore();} break;
    }
    // addScore();
    console.log(upScore);
}

// window.onload = setInterval(changeMove(el),1000);