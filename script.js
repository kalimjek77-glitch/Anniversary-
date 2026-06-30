// Loading Screen
setTimeout(() => {
    document.getElementById("loading").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
}, 2500);

// Quiz Checker
function checkAnswer(){

const first=document.getElementById("fname").value.trim().toLowerCase();
const middle=document.getElementById("mname").value.trim().toLowerCase();
const last=document.getElementById("lname").value.trim().toLowerCase();

const result=document.getElementById("result");

if(
(first==="april joy"||first==="april") &&
middle==="esperila" &&
last==="contiga"
){

result.style.color="#7CFC00";
result.innerHTML="❤️ Correct! Welcome My Love ❤️";

setTimeout(()=>{

document.getElementById("quiz").classList.add("hidden");
document.getElementById("bouquetPage").classList.remove("hidden");

},1500);

}else{

result.style.color="#ff6961";
result.innerHTML="❌ Wrong Answer.<br>Hint: She's the love of my life ❤️";

}

}

// Bouquet Click
function openLetter(){

document.getElementById("bouquetPage").classList.add("hidden");

document.getElementById("letter").classList.remove("hidden");

// Play Music
document.getElementById("bgmusic").play();

typeMessage();

}

// Typing Effect

const message=`Dear April Joy Esperila Contiga,

Happy 4th Anniversary, My Love! ❤️

Thank you for staying with me through every smile, every challenge, and every dream.

You are my greatest blessing, my peace, and the most beautiful person in my life.

No matter what happens, I will always choose you, love you, and cherish you.

I promise to continue loving you with all my heart today, tomorrow, and forever.

I love you so much. ❤️

Forever Yours,
Jojo ❤️`;

let index=0;

function typeMessage(){

const area=document.getElementById("typing");

function type(){

if(index<message.length){

area.innerHTML+=message.charAt(index);

index++;

setTimeout(type,35);

}

}

type();

}

// Floating Hearts

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*25)+"px";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

},400);
