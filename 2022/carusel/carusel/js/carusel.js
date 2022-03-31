var swipe = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true

    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        hiddenClass: ".swiper-button-hidden",

    }
    ,
    breakpoints: {// настройки для разных разрешений
        545: {
            slidesPerView: 3,
            spaceBetween: 8,
        },

        768: {
            slidesPerView: 4,
            spaceBetween: 8,
        },
        991: {
            slidesPerView: 5,
            spaceBetween: 30
        },
        1192: {
            slidesPerView: 6,
            spaceBetween: 20
        }
    }
});
var hits = new Swiper(".hits-Swiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true

    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        hiddenClass: ".swiper-button-hidden",

    }
    ,
    breakpoints: {// настройки для разных разрешений
        545: {
            slidesPerView: 3,
            spaceBetween: 8,
        },

        768: {
            slidesPerView: 4,
            spaceBetween: 8,
        },
        991: {
            slidesPerView: 5,
            spaceBetween: 30
        },
        1192: {
            slidesPerView: 6,
            spaceBetween: 20
        }
    }
});