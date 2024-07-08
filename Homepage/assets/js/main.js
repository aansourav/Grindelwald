$(".responsive").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,

    prevArrow:
        '<button type="button" class="slick-prev tt" style="background-image: url(\'/assets/images/arrowbg.png\'); width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; margin-right: 30px;"><svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7051 1L10.8256 3.7037C9.4058 8.06886 5.56227 11.1988 1 11.7051V11.7051V11.7051C5.53839 12.0984 9.39599 15.1802 10.7819 19.5196L11.7051 22.4101" stroke="white" stroke-width="2"/><path d="M1.19727 11.7183L24.4 11.7183" stroke="white" stroke-width="2"/></svg></button>',
    nextArrow:
        '<button type="button" class="slick-next" style="background-color: #75ff69; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; margin-left: 30px;"><svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2949 1L14.1744 3.7037C15.5942 8.06886 19.4377 11.1988 24 11.7051V11.7051V11.7051C19.4616 12.0984 15.604 15.1802 14.2181 19.5196L13.2949 22.4101" stroke="white" stroke-width="2"/><path d="M24.8027 11.7183L1.6 11.7183" stroke="white" stroke-width="2"/></svg></button>',
    autoplay: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});
