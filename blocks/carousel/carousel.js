import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
    // Create the main carousel div
    const div = document.createElement('div');
    div.className = 'owl-carousel owl-theme';

    // Iterate over each child of the block
    [...block.children].forEach((row) => {
        const item = document.createElement('div');
        item.className = 'item carousel-item';

        // Move all children of the row to the item
        while (row.firstElementChild) item.append(row.firstElementChild);

        // Create and append the necessary elements with classes
        const carouselContent = document.createElement('div');
        carouselContent.className = 'carousel-content';

        const carouselText = document.createElement('div');
        carouselText.className = 'carousel-text';

        const mainText = document.createElement('p');
        mainText.className = 'main-text';
        mainText.textContent = 'Choose your go-to Kotak Credit Card for every purchase';

        const subText = document.createElement('p');
        subText.className = 'sub-text';
        subText.textContent = 'Exclusive Offers | Seamless Onboarding | Instant 24*7 VKYC';

        const buttonContainer = document.createElement('p');
        buttonContainer.className = 'button-container';

        const button = document.createElement('a');
        button.className = 'button';
        button.href = '#';
        button.title = 'Get Your card now';
        button.textContent = 'Get Your card now';

        buttonContainer.appendChild(button);
        carouselText.appendChild(mainText);
        carouselText.appendChild(subText);
        carouselText.appendChild(buttonContainer);
        carouselContent.appendChild(carouselText);
        item.appendChild(carouselContent);

        // Append the item to the main carousel div
        div.append(item);
    });

    // Optimize images
    div.querySelectorAll('picture > img').forEach((img) => {
        img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]));
    });

    // Clear the block and append the carousel div
    block.textContent = '';
    block.append(div);
}

// Initialize the carousel with jQuery
$(document).ready(function () {
    $(".owl-carousel").each(function () {
        $(this).owlCarousel({
            items: 1,
            loop: true,
            margin: 10,
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
});