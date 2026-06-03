const images = [
  {
    image: "images/main/1-archtop-matisse1.jpg",
    alt: {
      en: "Handcrafted archtop guitar body in progress in the workshop",
      fr: "Corps de guitare archtop artisanal en cours de fabrication dans l'atelier"
    }
  },
  {
    image: "images/main/2-fab-basse-5-flammed-walnut2.jpg",
    alt: {
      en: "Custom five-string bass with flamed walnut top",
      fr: "Basse cinq cordes sur mesure avec table en noyer flamme"
    }
  },
  {
    image: "images/main/3-fab-basse5-4.jpg",
    alt: {
      en: "Close-up of a handcrafted five-string bass build",
      fr: "Gros plan sur une basse cinq cordes artisanale en cours de fabrication"
    }
  },
  {
    image: "images/main/fab-ES5.jpg",
    alt: {
      en: "Semi-hollow custom guitar hanging during the finishing process",
      fr: "Guitare demi-caisse sur mesure suspendue pendant la finition"
    }
  },
  {
    image: "images/main/es330-fb-no-face.jpeg",
    alt: {
      en: "Handcrafted ES-330 style guitar presented in the workshop",
      fr: "Guitare de style ES-330 fabriquée artisanalement dans l'atelier"
    }
  },
  {
    image: "images/main/fab-telejunior3.jpg",
    alt: {
      en: "Custom Tele Junior style guitar in the workshop",
      fr: "Guitare de style Tele Junior sur mesure dans l'atelier"
    }
  },
  {
    image: "images/main/fab-chilicaster2.jpg",
    alt: {
      en: "Custom electric guitar build with bright handcrafted finish",
      fr: "Guitare electrique sur mesure avec finition artisanale coloree"
    }
  },
  {
    image: "images/main/rep-strat-Lserie.jpg",
    alt: {
      en: "Vintage Stratocaster under repair on the workbench",
      fr: "Stratocaster vintage en reparation sur l'etabli"
    }
  },
  {
    image: "images/main/fab-2guitars-chaise.jpg",
    alt: {
      en: "Two handcrafted guitars displayed together in the workshop",
      fr: "Deux guitares artisanales presentees ensemble dans l'atelier"
    }
  },
  {
    image: "images/main/guitars-expo.jpeg",
    alt: {
      en: "Collection of custom guitars displayed at an exhibition",
      fr: "Collection de guitares sur mesure presentees lors d'une exposition"
    }
  }
];

const lightboxControls = {
  lightbox: document.getElementById("image-lightbox"),
  lightboxImage: document.getElementById("lightbox-image"),
  lightboxClose: document.getElementById("lightbox-close")
};

function openLightbox(src, alt) {
  lightboxControls.lightboxImage.src = src;
  lightboxControls.lightboxImage.alt = alt;
  lightboxControls.lightbox.hidden = false;
}

function closeLightbox() {
  lightboxControls.lightbox.hidden = true;
}

lightboxControls.lightboxClose.addEventListener("click", closeLightbox);

lightboxControls.lightbox.addEventListener("click", function (event) {
  if (event.target === lightboxControls.lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeLightbox();
  }
});

let currentIndex = 0;

const galleryImages = document.querySelectorAll(".gallery-image");
const galleryTrack = document.querySelector(".gallery-track");
const prevButton = document.getElementsByClassName("prev-button")[0];
const nextButton = document.getElementsByClassName("next-button")[0];
let isGalleryChanging = false;

function renderGallery() {
  const currentLanguage = document.documentElement.lang === "en" ? "en" : "fr";

  galleryImages.forEach(function (image, index) {
    const imageIndex = (currentIndex + index) % images.length;
    const altText = images[imageIndex].alt[currentLanguage];
    image.src = images[imageIndex].image;
    image.alt = altText;
    image.addEventListener("click", function () {
      openLightbox(image.src, image.alt);
    });
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
