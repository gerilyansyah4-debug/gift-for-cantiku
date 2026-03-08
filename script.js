window.addEventListener("click",()=>{

document.getElementById("music").play()

})

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
width:520,
height:650,
showCover:true
}

)

pageFlip.loadFromHTML(document.querySelectorAll(".page"))

pageFlip.on("flip",(e)=>{

if(e.data >= 8){

setTimeout(()=>{

document.getElementById("bookContainer").style.display="none"

showPhotoHeart()

},1200)

}

})

}



function showPhotoHeart(){

let container=document.getElementById("photoHeart")

container.classList.remove("hidden")

container.innerHTML=""

let photos=[

"WhatsApp Image 2026-03-07 at 23.38.39.jpeg",
"WhatsApp Image 2026-03-08 at 13.25.51.jpeg",
"WhatsApp Image 2026-03-08 at 13.25.52.jpeg",
"WhatsApp Image 2026-03-08 at 13.25.53.jpeg",
"WhatsApp Image 2026-03-08 at 13.25.56.jpeg",
"WhatsApp Image 2026-03-08 at 13.25.57.jpeg",
"WhatsApp Image 2026-03-08 at 13.25.58.jpeg",
"WhatsApp Image 2026-03-08 at 13.25.59.jpeg"

]

let positions=[

{top:40,left:150},
{top:80,left:90},
{top:80,left:210},
{top:140,left:60},
{top:140,left:240},
{top:210,left:110},
{top:210,left:190},
{top:270,left:150}

]

photos.forEach((src,i)=>{

let img=document.createElement("img")

img.src=src

img.style.position="absolute"

img.style.width="80px"

img.style.height="80px"

img.style.objectFit="cover"

img.style.borderRadius="12px"

img.style.top=positions[i].top+"px"

img.style.left=positions[i].left+"px"

container.appendChild(img)

})

setTimeout(()=>{

showQuestion()

},2000)

}



function showQuestion(){

document.getElementById("finalQuestion").classList.remove("hidden")

document.getElementById("loveText").innerHTML=""

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

document.getElementById("text").innerHTML=""

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



function noAnswer(){

alert("yahhh jangan gitu dong 😭 coba pikir lagi ya 💗")

}
