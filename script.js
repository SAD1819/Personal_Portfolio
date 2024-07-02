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

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById('message').value;

    sendEmail(fullName, email, subject, message);

    function sendEmail(fullName, email, subject, message) {
        const bodyMessage = `Full Name: ${fullName}<br> Email ID: ${email}<br> Message: ${message}`;

        Email.send({
            SecureToken : "e65f1029-0baa-4545-a82d-f2100ab292ee",
            To: 'sad2041999@gmail.com',
            From: "sad2041999@gmail.com",
            Subject: subject,
            Body: bodyMessage
        })
        .then(response => {
            if(response === "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message Sent Successfully!",
                    icon: "success"
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "There was an error submitting the form: " + response,
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
        });
    }
});
