const header = document.querySelector("header");
document.addEventListener("scroll", function(){
    if(window.scrollY > 200){
        header.style.backgroundColor = "rgb(248,249,250)";
        header.style.width = "100%";
        header.style.color = "white";
    }else{
        header.style.backgroundColor = "transparent";
    }
})


