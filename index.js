var open=document.querySelector(".control_open");
var close=document.querySelector(".control_close");
var items=document.querySelector(".nav__items");
var body=document.querySelector("body")
body.addEventListener("click",function(e){
    console.log("closing navbar due to body click")
    items.classList.remove("active");
    close.classList.remove("show");
    body.classList.remove("overflow-hide")
    open.classList.add("show");
})
open.addEventListener("click",function(e){
    e.stopPropagation();
    console.log("clicked open");
    items.classList.add("active");
    this.classList.remove("show");
    body.classList.add("overflow-hide")
    close.classList.add("show");

})
close.addEventListener("click",function(e){
    e.stopPropagation();
    console.log("clicked close");
    items.classList.remove("active");
    this.classList.remove("show");
    body.classList.remove("overflow-hide")
    open.classList.add("show");

})
var items=document.querySelector(".nav__items");
items.addEventListener("click",(e)=>{
    
    console.log("items clicked")
    e.stopPropagation();
})
