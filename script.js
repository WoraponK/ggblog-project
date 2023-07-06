window.addEventListener("scroll", () => {
    let header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 50)
})


// --------------------- MENUEXPAND START ---------------------
let menuBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".close-btn");
let menuExpand = document.querySelector(".menu-expand");

menuBtn.addEventListener("click", () => {
    menuExpand.classList.add("active");
})
closeBtn.addEventListener("click", () => {
    menuExpand.classList.remove("active");
})
// --------------------- MENUEXPAND END ---------------------