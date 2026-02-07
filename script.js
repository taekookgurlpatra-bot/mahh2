
/* Auto Transition */
setTimeout(()=>{ showPage("game") },4000);

function showPage(id){
document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
document.getElementById(id).classList.add("active");
}

/* Kiss Game */

const kisses=[
"💋 Forehead Kiss — pure love",
"😘 Cheek Kiss — cute affection",
"💞 Hand Kiss — romantic charm",
"🔥 Passion Kiss — intense love",
"🌙 Goodnight Kiss — comfort warmth"
];

function generateKiss(){
let k=kisses[Math.floor(Math.random()*kisses.length)];
document.getElementById("kissResult").innerText="Destiny chose: "+k;
increaseKiss();
}

/* Typing Letter */

const letterText=`Happy Kiss Day meri jaan 💋🥺✨

Mujhe pata hai main abhi tumhe kiss nahi de paa rahi hoon...
Par distance sirf temporary hai 😌💗

Jab hum milenge...
main tumhe itne saare kisses dungi
ki tum count karte karte thak jaoge 😝💋✨

Bas thoda wait karo Ashraf...
Future mein interest ke saath saare kisses milenge 🫶🏻💫`;

let index=0;

function startTyping(){
const el=document.getElementById("loveLetter");
el.innerHTML="";
index=0;

function type(){
if(index < letterText.length){
el.innerHTML += letterText.charAt(index);
index++;
setTimeout(type,35);
}
}
type();
}

/* Floating Lipsticks */

const floatingContainer=document.getElementById("floatingContainer");
const floating=["💋","💗","✨","🌸"];

function createFloating(){
let item=document.createElement("div");
item.classList.add("floatingItem");
item.innerText=floating[Math.floor(Math.random()*floating.length)];
item.style.left=Math.random()*100+"vw";
item.style.animationDuration=(5+Math.random()*5)+"s";
floatingContainer.appendChild(item);
setTimeout(()=>item.remove(),8000);
}

setInterval(createFloating,600);

/* Kiss Counter */

let kissCount=0;
const counter=document.getElementById("kissCounter");

function increaseKiss(){
kissCount++;
counter.innerText="💋 "+kissCount;
counter.style.transform="scale(1.3)";
setTimeout(()=>counter.style.transform="scale(1)",200);
createExplosion();
}

/* Explosion */

function createExplosion(){
const container=document.getElementById("explosionContainer");

for(let i=0;i<15;i++){
let heart=document.createElement("div");
heart.classList.add("explosionHeart");
heart.innerText="💗";

heart.style.left=Math.random()*100+"vw";
heart.style.top=Math.random()*100+"vh";

heart.style.setProperty("--x",(Math.random()*200-100)+"px");
heart.style.setProperty("--y",(Math.random()*200-100)+"px");

container.appendChild(heart);
setTimeout(()=>heart.remove(),1000);
}
}

/* Shake Popup */

let lx,ly,lz;

window.addEventListener("devicemotion",(e)=>{
let a=e.accelerationIncludingGravity;

if(!lx){ lx=a.x; ly=a.y; lz=a.z; return; }

let diff=Math.abs(a.x-lx)+Math.abs(a.y-ly)+Math.abs(a.z-lz);

if(diff>25){ showPopup(); }

lx=a.x; ly=a.y; lz=a.z;
});

function showPopup(){
const popup=document.getElementById("kissPopup");
popup.style.display="block";
setTimeout(()=>popup.style.display="none",2000);
increaseKiss();
}

/* Secret Message */

let tap=0;

document.body.addEventListener("click",()=>{
tap++;
if(tap===5){
alert("Secret Message 💗\n\nAshraf tum meri favourite insan ho forever 😌💋✨");
tap=0;
}
});
