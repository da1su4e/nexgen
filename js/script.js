const burgerBtn = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const exit = document.getElementById("exit");

burgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
});

exit.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 1050 && mobileMenu.classList.contains("open")) {
        mobileMenu.classList.remove("open");
    }

    if (window.innerWidth > 425) {
        exit.style.display = "none";
    } else {
        exit.style.display = "block";
    }
});
