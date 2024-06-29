// Navigation bar scrolling animation
const nav = document.querySelector(".c-navbar");
let lastscrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (lastscrollY < window.scrollY) {
        nav.classList.add("hidden");
    } else {
        nav.classList.remove("hidden");
    }
    lastscrollY = window.scrollY;
}); 

// TypeScript.JS library
var typed = new Typed('#element', {
    strings: ['FrontEnd Developer', 'BackEnd Developer'],
    typeSpeed: 50,
    backspeed: 100,
    backDelay: 1000,
    loop: true
});

// Scroll to the Top Navigation
document.addEventListener("DOMContentLoaded", function() {
    let scrollToTopBtn = document.getElementById("scroll-top");

    // Show the button when scrolling down 20px from the top
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    // Scroll to the top of the page when the button is clicked
    scrollToTopBtn.addEventListener('click', function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});
