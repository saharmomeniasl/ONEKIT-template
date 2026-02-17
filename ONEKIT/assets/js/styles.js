window.addEventListener("scroll", () => {
            const scrollTop = window.scrollY;
            const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / pageHeight) * 100;

            document.getElementById("scroll-progress").style.width = scrollPercent + "%";
        });

window.addEventListener("scroll", function () {
            const navbar = document.querySelector(".navbar-custom");

            if (window.scrollY > 150) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });

document.addEventListener("DOMContentLoaded", function () {
            const karts = document.querySelectorAll('.kart');

            function revealOnScroll() {
                const triggerBottom = window.innerHeight * 0.85;

                karts.forEach(kart => {
                    const kartTop = kart.getBoundingClientRect().top;
                    if (kartTop < triggerBottom) {
                        kart.classList.add('show');
                    }
                });
            }

            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll(); // برای بارگذاری اولیه
        });


 document.addEventListener("DOMContentLoaded", () => {
            const images = document.querySelectorAll('.cards img');

            function revealCards() {
                const triggerPoint = window.innerHeight * 0.85;

                images.forEach((img, i) => {
                    const imgTop = img.getBoundingClientRect().top;

                    if (imgTop < triggerPoint) {
                        setTimeout(() => {
                            img.classList.add('show');
                        }, i * 120); // هر عکس 0.12s بعدی
                    }
                });
            }

            window.addEventListener("scroll", revealCards);
            revealCards(); // برای بار اول
        });



document.addEventListener("DOMContentLoaded", () => {
            const elements = [
                document.querySelector('.section-image'),
                document.querySelector('.section-video')
            ];

            function revealOnScroll() {
                const trigger = window.innerHeight * 0.85;

                elements.forEach((el, i) => {
                    if (!el) return;
                    const top = el.getBoundingClientRect().top;
                    if (top < trigger) {
                        setTimeout(() => {
                            el.classList.add('show');
                        }, i * 200); // هر عنصر 200ms بعدی
                    }
                });
            }

            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll();
        });


document.addEventListener("DOMContentLoaded", () => {
            const cards = document.querySelectorAll('.cards-grid .card');

            function revealCards() {
                const trigger = window.innerHeight * 0.85;

                cards.forEach((card, i) => {
                    const top = card.getBoundingClientRect().top;
                    if (top < trigger) {
                        setTimeout(() => {
                            card.classList.add('show');
                        }, i * 120); // هر کارت 0.12s بعدی ظاهر می‌شود
                    }
                });
            }

            window.addEventListener('scroll', revealCards);
            revealCards(); // برای بارگذاری اولیه
        });

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
