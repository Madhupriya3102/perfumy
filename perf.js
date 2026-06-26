var bars=document.getElementById("bars")
var sidemenu=document.getElementById("sidemenu")
var closebtn=document.getElementById("close")
bars.addEventListener("click",function(){
    sidemenu.classList.add("open")
})
closebtn.addEventListener("click",function(){
    sidemenu.classList.remove("open")
})