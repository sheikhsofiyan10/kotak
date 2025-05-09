import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
    // Create the main carousel div
    // Add class to the carousel wrapper
        document.querySelector(".carousel-wrapper").classList.add("owl-theme");

        // Add class to the carousel block
        document.querySelector(".carousel.block").classList.add("owl-theme");

        // Add classes to the first set of divs and picture elements
        let firstDivs = document.querySelectorAll(".carousel.block > div:nth-of-type(1) > div");
        firstDivs[0].classList.add("carousel-image");
        firstDivs[1].classList.add("carousel-content");

        // Add classes to the picture element inside the first div
        document.querySelector(".carousel-image picture").classList.add("carousel-image");

        // Add classes to the paragraphs inside the first text container
        let firstParagraphs = document.querySelectorAll(".carousel-content p");
        firstParagraphs[0].classList.add("main-text");
        firstParagraphs[1].classList.add("sub-text");
        firstParagraphs[2].classList.add("carousel-text");
        firstParagraphs[3].classList.add("button-container");

        // Add classes to the second set of divs and picture elements
        let secondDivs = document.querySelectorAll(".carousel.block > div:nth-of-type(2) > div");
        secondDivs[0].classList.add("carousel-image");
        secondDivs[1].classList.add("carousel-content");

        // Add classes to the picture element inside the second div
        // document.querySelector(".carousel-image picture").classList.add("carousel-image");

        // // Add classes to the paragraphs inside the second text container
        // let secondParagraphs = document.querySelectorAll(".carousel-content p");
        // secondParagraphs[0].classList.add("main-text");
        // secondParagraphs[1].classList.add("sub-text");
        // secondParagraphs[2].classList.add("button-container");
}

// Initialize the carousel with jQuery
// Initialize the carousel with jQuery
$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        dots: true,
        responsive: {
            600: {
                items: 1
            },
            800: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});