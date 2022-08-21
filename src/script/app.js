let downs = document.querySelectorAll(".expand");
let nav = document.querySelector(".nav");
let gridItems = document.querySelector(".choose")
let footer = document.querySelector("footer");
let about = document.querySelector(".about-btn");
let feature = document.querySelector(".features-btn");
let how = document.querySelector(".how-btn");
let cards = document.querySelector(".cards");
window.addEventListener("scroll", () => {
    if (scrollY > gridItems.getBoundingClientRect().bottom ) {
        nav.classList.add("fixed");
    }
    else {
        nav.classList.remove("fixed");
    }
})
downs.forEach(el => {
    el.addEventListener("click", () => {
        console.log(el.nextElementSibling)
        el.nextElementSibling.classList.toggle("active")
    })
});
about.addEventListener("click",()=> {
    window.scrollBy(footer.getBoundingClientRect().top, footer.getBoundingClientRect().bottom )
});
feature.addEventListener("click",()=> {
    window.scrollTo(4300,4400)
});
how.addEventListener("click", ()=> {
    window.scrollTo(900,1000)
} )
window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    console.log(window.scrollX)
});
