// ===============================
// LOVE ARCADE - PART 1
// ===============================

// Loading Screen
window.onload = function () {
    setTimeout(() => {
        document.getElementById("loading").classList.add("hidden");
        document.getElementById("quiz").classList.remove("hidden");
    }, 2500);
};

// Quiz Validation
function checkAnswer() {

    const first = document.getElementById("fname").value.trim().toLowerCase();
    const middle = document.getElementById("mname").value.trim().toLowerCase();
    const last = document.getElementById("lname").value.trim().toLowerCase();

    const result = document.getElementById("result");

    if (
        (first === "april joy" || first === "april") &&
        middle === "esperila" &&
        last === "contiga"
    ) {

        result.style.color = "#00ff99";
        result.innerHTML = "❤️ Correct! Access Granted ❤️";

        launchConfetti();

        setTimeout(() => {
            document.getElementById("quiz").classList.add("hidden");
            document.getElementById("bouquetPage").classList.remove("hidden");
        }, 1500);

    } else {

        result.style.color = "#ff5555";
        result.innerHTML = "❌ Wrong Answer<br>Hint: She's your forever love ❤️";

    }

}

// Open Love Letter
function openLetter() {

    document.getElementById("bouquetPage").classList.add("hidden");

    document.getElementById("letter").classList.remove("hidden");

    document.getElementById("footer").classList.remove("hidden");

    document.getElementById("bgmusic").play();

    typeWriter();

}

// Anniversary Message
const text = `Dear April Joy Esperila Contiga,

Happy 4th Anniversary, My Love! ❤️

Four amazing years have passed, and every day with you is still my favorite.

Thank you for staying beside me through every challenge, every success, every smile, and every dream.

You are my greatest blessing, my peace, my happiness, and the love of my life.

No matter what happens, I will always choose you.

I promise to love you today, tomorrow, and forever.

I love you so much.

Happy 4th Anniversary, Mahal! ❤️

Forever Yours,

Jojo ❤️`;

let i = 0;

// Typing Animation
function typeWriter() {

    if (i < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter, 35);

    }

}
heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*25)+"px";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

},400);

// ===============================
// LOVE ARCADE - PART 2
// ===============================

// Floating Hearts
setInterval(() => {

    const heart = document.createElement("div");

    heart.className = "heart";

    const hearts = ["❤️","💖","💕","💗","💘"];

    heart.innerHTML = hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (18 + Math.random()*25) + "px";

    heart.style.animationDuration = (5 + Math.random()*4) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },9000);

},400);


// Confetti
function launchConfetti(){

    const container=document.getElementById("confetti");

    for(let i=0;i<120;i++){

        const piece=document.createElement("div");

        piece.className="confetti";

        piece.style.left=Math.random()*100+"vw";

        piece.style.animationDuration=(2+Math.random()*2)+"s";

        piece.style.background=
        `hsl(${Math.random()*360},100%,60%)`;

        piece.style.transform=
        `rotate(${Math.random()*360}deg)`;

        container.appendChild(piece);

        setTimeout(()=>{
            piece.remove();
        },4500);

    }

}


// Small Sparkle Effect
setInterval(()=>{

    document.body.animate([
        {filter:"brightness(1)"},
        {filter:"brightness(1.04)"},
        {filter:"brightness(1)"}
    ],{
        duration:1000
    });

},5000);


// Prevent music autoplay error
document.addEventListener("click",()=>{

    const music=document.getElementById("bgmusic");

    if(music.paused){

        music.play().catch(()=>{});

    }

},{once:true});


// Console Love Message
console.clear();

console.log("%c❤️ Happy 4th Anniversary ❤️",
"color:#ff4d6d;font-size:28px;font-weight:bold;");

console.log("%cI Love You April Joy Esperila Contiga ❤️",
"color:pink;font-size:18px;");
