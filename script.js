let btn = document.querySelector(".hamburger-btn");

let navLinks = document.querySelector("nav ul");

btn.addEventListener("click", () => {
    navLinks.classList.toggle("active")
})