const galleries = {
  build: [
    "images/guitars_in_progress.png",
  "images/guitars_in_workshop.png",
  "images/holding_guitar.png",
  "images/workshop.png",
  "images/workshops-guitars.png"
  ]
}

document.querySelectorAll(".service-gallery").forEach(function (gallery) {
  const galleryName = gallery.dataset.gallery;
  const images = galleries[galleryName] || [];

  images.forEach(function (src, index) {
    const image = document.createElement("img");
    image.src = src;
    image.alt = "Gallery image " + (index + 1);
    image.className = "service-gallery-image";
    gallery.appendChild(image);
  });
});