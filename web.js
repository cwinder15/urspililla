/* MODAL */
// Get the modal
var modal = document.getElementById("myModal");

// Show the modal when the page loads
window.onload = function () {
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}


/* CAROUSEL */
const slides = document.querySelectorAll('.slider-container .slide');
const controlPrev = document.querySelector('.slider-container .control-prev');
const controlNext = document.querySelector('.slider-container .control-next');

let activeSlideIndex = 0;

controlPrev.addEventListener('click', () => {
    activeSlideIndex = (activeSlideIndex - 1 + slides.length) % slides.length;
    updateSlides();
});



/* smooth slider */
controlNext.addEventListener('click', () => {
    activeSlideIndex = (activeSlideIndex + 1) % slides.length;
    updateSlides();
});

function updateSlides() {
    slides.forEach((slide, index) => {
        if (index === activeSlideIndex) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

const navigation = document.querySelector(".primary-navigation");

const navigationHeight = navigation.offsetHeight;

document.documentElement.style.setProperty(
    "--scroll-padding",
    navigationHeight + "px"
);