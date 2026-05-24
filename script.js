const images = [
  "images/guitars_in_progress.png",
  "images/guitars_in_workshop.png",
  "images/holding_guitar.png",
  "images/workshop.png",
  "images/workshops-guitars.png"
];

let currentIndex = 0;

const galleryImages = document.querySelectorAll(".gallery-image");
const galleryTrack = document.querySelector(".gallery-track");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let isGalleryChanging = false;

function renderGallery() {
  galleryImages.forEach(function (image, index) {
    const imageIndex = (currentIndex + index) % images.length;
    image.src = images[imageIndex];
    image.alt = "Gallery image " + (imageIndex + 1);
  });
}

function updateGallery(direction) {
  if (isGalleryChanging) {
    return;
  }

  isGalleryChanging = true;
  galleryTrack.classList.add("is-changing");

  setTimeout(function () {
    currentIndex = currentIndex + direction;

    if (currentIndex >= images.length) {
      currentIndex = 0;
    }

    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }

    renderGallery();
    galleryTrack.classList.remove("is-changing");
    isGalleryChanging = false;
  }, 180);
}

nextButton.addEventListener("click", function () {
  updateGallery(1);
});

prevButton.addEventListener("click", function () {
  updateGallery(-1);
});

const buttons = document.querySelectorAll(".service-item button");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const description = button.nextElementSibling;

    if (description.style.display == "block") {
      description.style.display = "none";
    } else {
      description.style.display = "block";
    }
  });
});

renderGallery();


