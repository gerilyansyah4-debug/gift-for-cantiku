function startMusic(){

let music = document.getElementById("music")

music.currentTime = 65

music.play().catch(()=>{})

}

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

let text="would you like to be my girlfriend again?"

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

function openLove(){

document.getElementById("finalQuestion").style.display="none"
document.getElementById("flowerBox").style.display="none"

showTyping()

}

function showTyping(){

document.getElementById("typing").classList.remove("hidden")

let text="terimakasiii ya wes mau nerimo aku sekali neh, aku ga janji , tapi aku selalu berusaha dadi seng terbaik teko sebelum' e, aku berusaha gabakal ngulangi kesalahan kesalahan seng wes pernah tabuat, nek aku seumpama besok enek seng kurang pas bagi amu, ojo ragu gae negur, aku suka ditegur amu, aku suka nek amu mengevaluasi aku, ben aku iso dadi seng mbo pengeni sayang, sekali neh, aku banyak' terimakasih, loveyoumoree than anything sayang... ❤️"

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

function noAnswer(){
alert("Coba pikir lagi yaa 💗")
}
