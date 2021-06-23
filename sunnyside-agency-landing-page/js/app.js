const toggleBtn = document.querySelector(".toggle-btn");
const navLinks = document.querySelector(".nav-links");

toggleBtn.addEventListener("click", () => {
    if (navLinks.classList.contains("hidden")) {
        navLinks.classList.remove("hidden");
    } else {
        navLinks.classList.add("hidden");
    }
});