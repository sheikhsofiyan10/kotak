import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
    document.querySelector(".carousel-wrapper").classList.add("owl-theme");
        document.querySelector(".carousel.block").classList.add("owl-theme");
        let firstDivs = document.querySelectorAll(".carousel.block > div:nth-of-type(1) > div");
        firstDivs[0].classList.add("carousel-image");
        firstDivs[1].classList.add("carousel-content");
        document.querySelector(".carousel-image picture").classList.add("carousel-image");
        let firstParagraphs = document.querySelectorAll(".carousel-content p");
        firstParagraphs[0].classList.add("main-text");
        firstParagraphs[1].classList.add("sub-text");
        firstParagraphs[2].classList.add("sub-text");
        const buttonContainers = document.querySelectorAll(".carousel-content .button-container");
        if (buttonContainers.length >= 2) {
            const combinedDiv = document.createElement("div");
            combinedDiv.classList.add("button-wrapper-combined");
            // Insert the combined div before the first button container
            buttonContainers[0].parentNode.insertBefore(combinedDiv, buttonContainers[0]);
            // Move both button containers into the combined div
            combinedDiv.appendChild(buttonContainers[0]);
            combinedDiv.appendChild(buttonContainers[1]);
        }

        let learnMoreLink = document.querySelector(".carousel-content p:nth-of-type(3) a");
        if (learnMoreLink) {
            learnMoreLink.classList.add("learn-more-link");
        }
        let secondDivs = document.querySelectorAll(".carousel.block > div:nth-of-type(2) > div");
        if (secondDivs.length > 0) {
            secondDivs[0].classList.add("carousel-image");
            secondDivs[1].classList.add("carousel-content", "carousel-content2");
        }
}


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