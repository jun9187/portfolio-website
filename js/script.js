document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const socLinks = document.getElementById("social-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        socLinks.classList.toggle("active");
    });

    const currPage = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll(".nav-links a");

    links.forEach(link => {
        const hrefPage = link.getAttribute("href");
        if(hrefPage == currPage) {
            const parentLi = link.closest("li");
            parentLi.classList.add("currPage");
            link.addEventListener("click", e => e.preventDefault());
        }
    });
});

function sendMail(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const subject = encodeURIComponent("Contact from Portfolio");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    
    window.location.href = `mailto:jun00@graduate.utm.my?subject=${subject}&body=${body}`;
}

window.addEventListener("scroll", () => {
    let lastScroll = 0;
    const header = document.querySelector("header");
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }
    lastScroll = currentScroll;
});