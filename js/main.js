
let menuBtn = document.getElementById("menu");
let mobileMenu = document.querySelector(".mobile-menu");
let navHeight = document.querySelector(".nav");
let srcollbtn = document.getElementById("srcollbtn");

window.addEventListener("scroll", function () {
    if (window.scrollY <= 180) {
        srcollbtn.classList.remove("active");
    } else {
        srcollbtn.classList.add("active");
    }
});

menuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
});

window.addEventListener("scroll", function () {
    mobileMenu.classList.remove("active");
});