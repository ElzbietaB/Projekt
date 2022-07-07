const gamePlane=document.querySelector(".gamePlane")
gamePlane.style.cssText=`
    border:2px 
    dashed red; 
    height:20px;
`


const wall=document.createElement("div")
wall.style.cssText='backgroung-color:red; widht:50px; height;50px; left:100px; top:100px;'

gamePlane.append(wall)
