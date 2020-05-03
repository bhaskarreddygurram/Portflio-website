const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".porfolio-gallery").children;

for(let i=0; i<filterButtons.length; i++){
filterButtons[i].addEventListener("click", function(){
    for(let j=0; j<filterButtons.length; j++){
        filterButtons[j].classList.remove("active")
    }
    this.classList.add("active");
    const target=this.getAttribute("data-target")

    for( let k=0; k<items.length; k++){
        items[k].style.display= "none";
        if(target==items[k].getAttribute("data-id"))
        {
            items[k].style.display="block";
        }
        if(target=="all"){
            items[k].style.display="block";
        }
    }
    
})
}
// image gallery
const closeLightBox = document.querySelector(".close-lightbox");
const lightbox=document.querySelector(".lightbox");
const lightBoxImage = lightbox.querySelector("img");

 lightbox.addEventListener("click", function(){
     if(event.target!=lightBoxImage){
         lightbox.classList.remove("show");
         lightbox.classList.add("hide");
     }
 })

closeLightBox.addEventListener("click",function(){
    lightbox.classList.remove("show");
    lightbox.classList.add("hide");
})

//lightbox
const gallery=document.querySelector(".porfolio-gallery");
const galleryItem = gallery.querySelectorAll(".item");

galleryItem.forEach(function(element){
   element.querySelector(".fa-plus").addEventListener("click",function(){
    lightbox.classList.remove("hide");
    lightbox.classList.add("show");
    lightBoxImage.src=element.querySelector("img").getAttribute("src");

   });
})
/* header fixed */
window.onscroll=function(){
    const doScrollTop=document.documentElement.scrollTop;
    if(window.innerWidth>991){
        if(doScrollTop>100){
            document.querySelector("header").classList.add("fixed")
        }
        else{
            document.querySelector("header").classList.remove("fixed")
        }
    }
}

const navbar = document.querySelector(".navbar");
a=navbar.querySelectorAll("a");

a.forEach(function(element){
    element.addEventListener("click",function(){
        for(let i=0; i<a.length; i++){
            a[i].classList.remove("active");
        }
        this.classList.add("active")
        document.querySelector(".navbar").classList.toggle("show");
    })
})
// ham-burger

const hamBurger=document.querySelector(".ham-burger");

hamBurger.addEventListener("click", function(){
    document.querySelector(".navbar").classList.toggle("show");
})