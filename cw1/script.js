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

function changeHTMLInfo(slideNr){
    const title = data[slideNr].title
    console.log(title);

    const titleDOM=document.querySelector("h2")
    titleDOM.innerHTML=title

}

changeHTMLInfo(2)








/*console.log("Hello World");

const a=6;
const b=7;

if(a<b){
    console.log("A jest mniejsze")
} else {
    console.log("i co ty na to")
}*/