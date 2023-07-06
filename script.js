window.addEventListener("scroll", () => {
    let header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 50)
})