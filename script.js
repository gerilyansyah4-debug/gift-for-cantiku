const rain=document.getElementById("rain")

for(let i=0;i<150;i++){
let heart=document.createElement("div")
heart.className="heart"
heart.innerHTML="💗"
heart.style.left=Math.random()*100+"vw"
heart.style.animationDuration=(Math.random()*3+2)+"s"
heart.style.fontSize=(Math.random()*20+10)+"px"
rain.appendChild(heart)
}

let count=3
let countdown=document.getElementById("countdown")

let timer=setInterval(()=>{
count--
countdown.innerText=count

if(count==0){

clearInterval(timer)

countdown.style.display="none"

document.getElementById("title").classList.remove("hidden")

setTimeout(()=>{
document.getElementById("bigHeart").classList.remove("hidden")
},2000)

setTimeout(()=>{
document.getElementById("ready").classList.remove("hidden")
},4000)

}

},1000)

function openBook(){

document.querySelector(".center").style.display="none"

document.getElementById("bookContainer").classList.remove("hidden")

const pageFlip=new St.PageFlip(
document.getElementById("book"),
{
width:380,
height:480,
showCover:true
}
)

pageFlip.loadFromHTML(document.querySelectorAll(".page"))

pageFlip.on("flip",(e)=>{

if(e.data==8){

setTimeout(()=>{
document.getElementById("bookContainer").style.display="none"
showFlowers()
},1000)

}

})

}

function showFlowers(){

let flower=document.getElementById("flowerBox")

flower.classList.remove("hidden")

setTimeout(()=>{
showQuestion()
},2000)

}

function showQuestion(){

let q = document.getElementById("finalQuestion")

q.classList.remove("hidden")
q.style.display="flex"

let text="Apakah kamu mau menjadi kekasihku sekali lagi?"

let i=0

function typing(){

if(i<text.length){

document.getElementById("loveText").innerHTML+=text.charAt(i)

i++

setTimeout(typing,70)

}

}

typing()

}

function showTyping(){

document.getElementById("typing").classList.remove("hidden")

let text="Aku masih sayang kamu. Jadi... maukah kamu kembali bersamaku? 💗"

let i=0

function typing(){

if(i<text.length){

document.getElementById("text").innerHTML+=text.charAt(i)

i++

setTimeout(typing,70)

}

}

typing()

}

function openLove(){

window.open("love.html","_blank")

}

function noAnswer(){

alert("Coba pikir lagi yaa 💗")

}
