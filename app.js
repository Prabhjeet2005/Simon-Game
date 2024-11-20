h4=document.querySelector("h4");

body=document.querySelector("body");
let btns =["red","blue","orange","green"];


let game=[];
let user=[];

let start=false;
level=0;
document.addEventListener("keydown",function(){
    if(start==false){
        start=true;
        levelup();
    }
})
function gameflash(e){
    e.classList.add("flash");
    setTimeout(()=>{
        e.classList.remove("flash");
    },500);
    
}
function userflash(e){
    e.classList.add("gg");
    setTimeout(()=>{
        e.classList.remove("gg");
    },100);
    
}
function levelup(){
    level++;
    user=[];
    h4.innerText=`level ${level}`;
    let random=Math.floor(Math.random()*4);
    let randColor=btns[random];
    let randbtn=document.querySelector(`.${randColor}`);
    game.push(randColor);
    console.log(game);
    gameflash(randbtn);
}
function check(i){
    
    if(game[i]==user[i]){
        if(user.length==game.length){
            setTimeout(levelup(),2000);
        }}
    else {
        
        h4.innerText = `Game Over! your score is ${level} (Press Any Key To Start Again)`;
        body.classList.add('omg');
        setTimeout(() => {
					body.classList.remove('omg')
				}, 300);
        reset();
    }
}
function userPress(){
    userflash(this);
    userColor=this.getAttribute("id");
    user.push(userColor);
    check(user.length-1);
}
btn=document.querySelectorAll(".c");
for(b of btn){
    b.addEventListener("click",userPress);
}

function reset(){
    game=[];
    user=[];
    start=false;
    level=0;
    
    
}

