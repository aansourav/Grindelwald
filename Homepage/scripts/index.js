const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,

    pagination: {
        el: ".swiper-pagination",
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    scrollbar: {
        el: ".swiper-scrollbar",
    },
});

window.addEventListener("scroll", () => {
    var navbar = document.querySelector(".nav-header");
    var navbarHeight = navbar.offsetHeight;

    if (window.scrollY > navbarHeight) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
});
