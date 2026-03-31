var typed = new Typed(".multiple-text",{
    strings: ["Frontend Developer", "Web Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})  

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    btn.innerText = "Downloading..." ;
    setTimeout(() => {
        btn.innerText = "Download CV";
    }, 2000);
});

// document.getElementById("facebook").addEventListener("click", () => {
//     window.open("https://www.facebook.com/Mandal.saran.2020/", );
// });

// document.getElementById("twitter").addEventListener("click", () => {
//     window.open("https://x.com/skmandal1234", );
// });

// document.getElementById("instagram").addEventListener("click", () => {
//     window.open("https://www.instagram.com/mandal__saran", );
// });

// document.getElementById("linkdin").addEventListener("click", () => {
//     window.open("https://www.linkedin.com/in/saran-mandal-b70370304", );
// });

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 120;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            let activeLink = document.querySelector(`.navbar a[href*="${id}"]`);
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
});

