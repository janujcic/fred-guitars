const images = [
  "images/main/fab-ES5.jpg",
  "images/main/2-fab-basse-5-flammed-walnut2.jpg",
  "images/main/es330-fb-no-face.jpeg",
  "images/main/fab-telejunior3.jpg",
  "images/main/1-archtop-matisse1.jpg",
  "images/main/fab-chilicaster2.jpg",
  "images/main/rep-strat-Lserie.jpg",
  "images/main/fab-2guitars-chaise.jpg",
  "images/main/3-fab-basse5-4.jpg"
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

