import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
    // Create the main carousel div
    // Add class to the carousel wrapper
    document.querySelector(".carousel-wrapper").classList.add("owl-theme");

    document.querySelector(".carousel.block").classList.add("owl-theme");

    let firstDivs = document.querySelectorAll(".carousel.block > div:nth-of-type(1) > div");
    firstDivs[0].classList.add("carousel-image");
    firstDivs[1].classList.add("carousel-content");

    document.querySelector(".carousel-image picture").classList.add("carousel-image");

    let firstParagraphs = document.querySelectorAll(".carousel-content p");
    firstParagraphs[0].classList.add("main-text");
    firstParagraphs[1].classList.add("sub-text");
    firstParagraphs[2].classList.add("carousel-text");
    // firstParagraphs[3].classList.add("button-container");


    let secondDivs = document.querySelectorAll(".carousel.block > div:nth-of-type(2) > div");
    secondDivs[0].classList.add("carousel-image");
    secondDivs[1].classList.add("carousel-content", "carousel-content2");

    savingsButton = secondDivs[1].querySelector("a.button");
    if (savingsButton) {
        savingsButton.classList.add("savings-btn");
    }
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