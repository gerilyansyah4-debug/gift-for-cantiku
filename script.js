const rain = document.getElementById("rain")

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

const pageFlip = new St.PageFlip(
document.getElementById("book"),
{
width:300,
height:400,
showCover:true
}
)

pageFlip.loadFromHTML(document.querySelectorAll(".page"))

pageFlip.on("flip",(e)=>{

if(e.data==7){

setTimeout(()=>{

document.getElementById("bookContainer").style.display="none"

document.getElementById("question2").classList.remove("hidden")

},1000)

}

})

}



function showTyping(){

document.getElementById("question2").style.display="none"

document.getElementById("typing").classList.remove("hidden")

let text="Terima kasih sudah kembali lagi denganku 💗"

let i=0

function typing(){

if(i<text.length){

document.getElementById("text").innerHTML+=text.charAt(i)

i++

setTimeout(typing,80)

}

}

typing()

}
