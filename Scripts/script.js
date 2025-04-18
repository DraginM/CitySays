function TogleMenu() {
    document.querySelector('header nav').classList.toggle('show');
    document.querySelector('.burger').classList.toggle('show');
}

$(document).ready(function(){
    $(' #archive .swiper').slick({
        infinite: false,
        slidesToShow: 3,
        dots: true,
        appendDots: document.querySelector('#archive .bottom .nav'),
        appendArrows: document.querySelector('#archive .bottom .nav'),
        responsive: [
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
              }
            },
        ]
    });
});