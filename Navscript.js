let hamburger = document.querySelector("#hamburger");
let main_nav_bar = document.querySelector('.main_nav_bar');
let second_navbar = document.querySelector(".second_navbar");
let tag = document.querySelector('.tag')

console.log(hamburger)
console.log(second_navbar)
console.log(main_nav_bar)
console.log(tag)

hamburger.addEventListener("click", function(){
   
    if (main_nav_bar.style.display === "block") {
        second_navbar.style.height= "0rem";
        second_navbar.style.padding = "0rem"
        main_nav_bar.style.display = "None"



    }else{
        main_nav_bar.style.display = "block";
        second_navbar.style.height= "36rem";
    }

})
