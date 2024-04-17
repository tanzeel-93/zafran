// Header Scroll
let nav = document.getElementById("navbar");
window.onscroll = function() { navfunction()};
function navfunction(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}

// nav hide 
let navBar = document.getElementById("navbar");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})
 


                                                                                                                


// function myFunction() {
//   if (document.documentElement.scrollTop > 350) {
//     document.getElementById("about").className = "slideUp";
//   }
// }