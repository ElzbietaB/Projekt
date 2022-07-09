const gamePlane=document.querySelector(".gamePlane")
gamePlane.style.cssText=`
    border:2px 
    dashed red; 
    height:20px;
`


const wall=document.createElement("div")
wall.style.cssText=`
    backgroung-color:red; 
    widht:${w}%; 
    height;50px; 
    left:100px; 
    top:100px;
    `

gamePlane.append(wall)

const map = [
    [0, 0, 20, 20],
    [20, 10, 40, 10],
    [50, 20, 10, 60],
    [50, 80, 30, 10],
    [80, 80, 20, 20]
]  
