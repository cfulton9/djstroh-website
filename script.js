console.log("DJ Stroh website is running...");

/* -----------------------------------
   DOMContentLoaded: Fade-in
------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {

    const faders = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    faders.forEach(fader => observer.observe(fader));
});

/* -----------------------------------
   MOBILE MENU — Slide + Animation Fix
------------------------------------*/
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    nav.classList.toggle("open");
});

document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        nav.classList.remove("open");
    });
});

/* -----------------------------------
   Scroll Reveal Animations
------------------------------------*/
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
