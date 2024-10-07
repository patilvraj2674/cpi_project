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

function updateContent() {
    contents.forEach(content => content.classList.remove('active'));
    document.querySelector(`.content-${currentSection}`).classList.add('active');
}

window.addEventListener('wheel', (event) => {
    if (!canScroll) return;
    canScroll = false;

    if (scrollSection.style.display === "block") return;

    if (event.deltaY > 0) {
        if (currentSection < totalSections) {
            currentSection++;
            updateContent();
        } else {
            setTimeout(() => {
                scrollSection.style.display = 'block';
                document.body.style.overflowY = 'scroll';
            }, 1000);
        }
    } else {
        if (currentSection > 1) {
            currentSection--;
            updateContent();
        }
    }

    setTimeout(() => {
        canScroll = true;
    }, 800);
});
