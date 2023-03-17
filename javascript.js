let menubox =document.getElementById("menubox");
let menuicon= document.getElementById("menuicon");
menuicon.onclick=function(){
    menubox.classList.toggle('open-menu');
    if(menubox.classList.contains("open-menu")){
        menuicon.src="menuicon.jpg";
    }
    else{
        menuicon.scr="menuicon.jpg";    
    }
}