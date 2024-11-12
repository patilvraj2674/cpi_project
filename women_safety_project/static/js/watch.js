// Part 1: Image Changing Logic
const images = ['watch.png', 'image.png', 'image.png']; // Replace with your 3 images
let currentImage = 0;
let intervalId;

function changeImage(index) {
    if (typeof index !== 'undefined') {
        currentImage = index;
        clearInterval(intervalId); // Stop auto-change when manually switched
    } 
    document.getElementById('mainImage').src = images[currentImage];
}

// Auto change images every 3 seconds
intervalId = setInterval(() => {
    currentImage = (currentImage + 1) % images.length;
    changeImage();
}, 3000);

// Part 3: Circle Scroll Animation Logic
let currentSection = 1;
const totalSections = 3;
const contents = document.querySelectorAll('.content');
const scrollSection = document.querySelector('.scroll-section');
let canScroll = true;
let scrollCount = 0; // Track the number of scrolls

function updateContent() {
    contents.forEach(content => content.classList.remove('active'));
    document.querySelector(`.content-${currentSection}`).classList.add('active');
}

window.addEventListener('wheel', (event) => {
    if (!canScroll) return;
    canScroll = false;

    if (scrollCount < 2) { // Custom scroll behavior for first 3 scrolls
        if (event.deltaY > 0) {
            if (currentSection < totalSections) {
                currentSection++;
                updateContent();
            }
            scrollCount++;
        } else if (currentSection > 1) { // Allow reverse scroll within custom behavior
            currentSection--;
            updateContent();
        }
    } else { // After 3 scrolls, enable normal scrolling and show the scroll section
        scrollSection.style.display = 'block';
        document.body.style.overflowY = 'scroll'; // Allow normal page scrolling
    }

    setTimeout(() => {
        canScroll = true;
    }, 800);
});
