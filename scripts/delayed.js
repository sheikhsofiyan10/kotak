// add delayed functionality here

$(".owl-carousel.card-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        dots: true,
        responsive: {
            0:{
                items:2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        },
    });

$(".carausel-tabs .owl-carousel").owlCarousel({
      items: 4,
      loop: true,
      margin: 10,
      nav: true,
      autoplay: false,
      dots:true,
      autoplayTimeout: 3000,
      responsive: {
        0:{
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 4
        }
    },

    });