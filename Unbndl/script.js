let currentIndex = 0;
const slides = document.querySelector('.slides');

function showNextSlide() {
    currentIndex++;
    let totalSlides = 2;
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    slides.style.transform = `translateX(-${currentIndex * 50}%)`;
}

setInterval(showNextSlide, 5000);

document.addEventListener('DOMContentLoaded', function() {
    // Select all the review containers
    const reviewContainers = document.querySelectorAll('.sec5 .container');

    // Select the people-page element
    const peoplePage = document.querySelector('.people-page');

    // Add click event listeners to all review containers
    reviewContainers.forEach(container => {
        container.addEventListener('click', () => {
            // Show the people-page section
            peoplePage.style.display = 'flex';
        });
    });
});


const btnCarousel = document.getElementById('btn-carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const slideWidth = document.querySelector('.btn-carousel-slide').offsetWidth; // Width of one slide

// Move the carousel to the right (next slide)
nextBtn.addEventListener('click', () => {
    console.log('left');
    btnCarousel.scrollBy({
        left: slideWidth,  // Move by the width of one slide
        behavior: 'smooth'  // Smooth scroll
    });
});

// Move the carousel to the left (previous slide)
prevBtn.addEventListener('click', () => {
    console.log('right');
    btnCarousel.scrollBy({
        left: -slideWidth,  // Move by the width of one slide in the opposite direction
        behavior: 'smooth'  // Smooth scroll
    });
});

const blogLinks = document.querySelectorAll(".blog-link");
const blogContentContainers = document.querySelectorAll(".blog-content");

const articleContainer = document.querySelector(".article-container");

let currentKey = "General Dentistry";

const blogLinksArray = [
  "General Dentistry",
  "Cosmic Dentistry",
  "Crowns & Bridges",
  "Nutrition",
  "Oral Surgery",
  "Root Canal",
  "Implants & Dentures",
];

blogLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const key = link.getAttribute("data-key");
    if (key !== currentKey) {
      renderBlog(key);
    }
  });
});

function renderBlog(key) {
  const currentIndex = blogLinksArray.indexOf(currentKey);
  const newIndex = blogLinksArray.indexOf(key);

  const translateXValue =
    currentIndex > newIndex ? -100 * newIndex : -100 * newIndex;
  articleContainer.style.transform = `translateX(${translateXValue}%)`;

  const oldContainer = document.querySelector(".activeSlide");
  const newContainer = document.getElementById(`${newIndex}`);
  oldContainer.classList.remove(".activeSlide");
  newContainer.classList.add("activeSlide");
  currentKey = key;
  updateActiveLink(key);
}

function updateActiveLink(key) {
  blogLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("data-key") === key) {
      link.classList.add("active");
    }
  });
}

