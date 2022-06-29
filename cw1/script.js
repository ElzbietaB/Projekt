const data = [
{
    title:"Pink lake",
    src: "1.webp",
},
{
    title:"Single island",
    src: "2.webp",
},
{
    title:"Forest lake",
    src: "3.webp",
},
]

//console.log(data)

function changeHTMLInfo( slideNr ){
 
    const title = data[slideNr].title;
//    console.log(title);
    const titleDOM=document.querySelector("h2")
    titleDOM.innerHTML=title

    const image = data[slideNr].src;
//    console.log(image);
    const imageDOM=document.querySelector("img")
    imageDOM.src="img/"+image
}

changeHTMLInfo(1)

let currSlide = 1;
function changeSlide( direction ){
    if ( direction == "left"){  
        currSlide--  
    }else{
        currSlide++  
    }

    if (currSlide<0) {
      currSlide=data.length-1  
    }

    if (currSlide>data.length-1) {
        currSlide=0 
      }

 //   console.log(currSlide)
    changeHTMLInfo(currSlide)
}
changeHTMLInfo(currSlide) 
 
const leftArr = document.querySelector(".leftArr")
leftArr.onclick = function(){
    changeSlide("left")
}

/* const rightArr = document.querySelector(".rightArr")
rightArr.onclick = function(){
    changeSlide("right")
}*/

document.querySelector(".rightArr").onclick = function(){
    changeSlide("right")
}
